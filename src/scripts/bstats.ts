const bstatsBaseUrl = "https://bstats.org/api/v1";

// https://bstats.org/plugin/bukkit/packetevents/11327
export const bstatsPluginId = 11327;

// get the maximum of the last 7 days of data
const maximumDataElements = (24 / 0.5) * 7;

type bstatsChartData = [bigint, number][];

export const getBstatsMaxValue = async (chartId: string): Promise<number> => {
    const resp = await fetch(
        `${bstatsBaseUrl}/plugins/${bstatsPluginId}/charts/${chartId}/data?maxElements=${maximumDataElements}`,
        {
            headers: {
                Accept: "application/json",
                "User-Agent": "packetevents website fetch",
            },
        },
    );
    if (!resp.ok) {
        throw new Error(
            `Failed to fetch chart data ${chartId} for plugin ${bstatsPluginId} from bstats: ${resp.status} ${resp.statusText}`,
        );
    }
    const data: bstatsChartData = await resp.json();
    const [_, max] = data.reduce(([_1, prev], [_2, val]) => [0n, Math.max(prev, val)], [0n, 0]);
    return max;
};

export const formatStatValue = async (chartId: string, precision: number = 1000) => {
    let preciseValue = await getBstatsMaxValue(chartId);
    // we use the wording "over x ...", so subtract one to make sure this is actually correct
    preciseValue = Math.max(0, preciseValue - 1);
    const v = Math.floor(preciseValue / precision) * precision;
    return v.toLocaleString("en-US");
};

export const serverCount = await formatStatValue("servers");
export const playerCount = await formatStatValue("players");

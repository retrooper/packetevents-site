function getDayWithSuffix(day: number): string {
    const suffix = (day: number) => {
        if (day >= 11 && day <= 13) return "th";
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };
    return day + suffix(day);
}

export function formatDateWithSuffix(date: Date): string {
    const month = date.toLocaleDateString("en-US", {month: "long"});
    const day = date.getDate();
    return `${month} ${getDayWithSuffix(day)}, ${date.getFullYear()}`;
}

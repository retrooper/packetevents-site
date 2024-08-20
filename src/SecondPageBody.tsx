import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import grapheneImage from "./assets/graphene_development_image.png";
import pluginDevelopmentImage from "./assets/plugin_development_image.jpg";

export default function SecondPageBody() {
  return (
    <>
      <div className="space-y-20 flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        <h2>
          <ul className="pt-64">
            Writing a Minecraft Server powered by Netty & PacketEvents!
          </ul>
        </h2>

        <AspectRatio ratio={16 / 5} className="bg-muted">
          <img
            src={grapheneImage}
            alt="Photo of Graphene, written by retrooper"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="pt-32 space-x-48 flex justify-right mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        <ul className="pt-40">Minecraft Plugin Development</ul>
        <AspectRatio ratio={16 / 5} className="bg-muted w-[400px]">
          <img
            src={pluginDevelopmentImage}
            alt="Photo of supposed Plugin Development, written by retrooper"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div className="flex justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        <h2>
          <ul className="pt-40">And much more!</ul>
        </h2>
      </div>
    </>
  );
}

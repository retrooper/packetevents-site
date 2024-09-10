import { Separator } from "@/components/ui/separator";

export default function SecondPageTitle() {
  return (
    <>
      <Separator className="my-20" />
      <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        <h1>What is possible with</h1>
      </div>
      <div className="flex justify-center mb-4 text-4xl leading-none tracking-tight text-[#444dee] md:text-5xl lg:text-4xl ">
        <h1>PacketEvents</h1>
      </div>
    </>
  );
}

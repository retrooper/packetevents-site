import { Blog } from "./Blog";

export const Release250: Blog = {
  date: new Date(2024, 2, 1),
  title: "PacketEvents 2.5.0 Release",
  pagelink: "/",
  brief: (
    <div className="text-white">
      <ul className="list-disc ml-5">
        <li>Minecraft 1.21(.1) support</li>
        <li>Performance & Development improvements</li>
      </ul>

      <p className="mt-5">Version 2.5.0 Release is now available</p>
      <p className="mt-2">
        This version allows you to test the latest Minecraft 1.21(.1) features.
      </p>
    </div>
  ),
  content: <div></div>,
};

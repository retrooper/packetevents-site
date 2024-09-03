import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function PageFooter() {
  return (
    <>
      <footer className="bg-white bg-gradient-to-r from-gray-900 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-4 gap-8 px-32 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://docs.packetevents.com"
                    className=" hover:underline"
                  >
                    Docs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://docs.packetevents.com/docs/getting-started"
                    className="hover:underline"
                  >
                    Getting Started
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://javadocs.packetevents.com"
                    className="hover:underline"
                  >
                    JavaDocs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://bstats.org/plugin/bukkit/packetevents/11327"
                    className="hover:underline"
                  >
                    Statistics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://discord.gg/DVHxPPxHZc"
                    className="hover:underline"
                  >
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:retrooperdev@gmail.com"
                    className="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-900 dark:text-white font-medium">
                Subscribe to our newsletter
              </ul>
              <div className="flex w-full max-w-sm items-center space-x-2 pt-2">
                <Input type="email" placeholder="Email" />
                <Button
                  type="submit"
                  variant="outline"
                  onClick={() =>
                    toast("You're now subscribed to the newsletter!", {
                      description: new Date().toDateString(),
                      action: {
                        label: "Undo",
                        onClick: () => {
                          //TODO Remove from newsletter
                          console.log("Undo");
                        },
                      },
                    })
                  }
                >
                  Subscribe
                </Button>
                <Toaster />
              </div>
            </div>
          </div>

          <span className="flex justify-between text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            <ul>© 2024 retrooper</ul>
            <ul></ul>
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

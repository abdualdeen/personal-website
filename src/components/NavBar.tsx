import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigationItems = [
  { name: "Home", href: "/", current: false },
  { name: "Charts", href: "/charts", current: false },
  { name: "My Github", href: "https://github.com/abdualdeen", current: false },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-aldeen/", current: false },
  { name: "Resume", href: "https://drive.google.com/file/d/1Y2Ydd4HnlzLOtp2Ija_6kIP9DgV8zVaC/view", current: false },
  { name: "Projects", href: "/projects", current: false},
  
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-opacity-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-stretch justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* logo */}
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src="./website-logo.png"
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./website-logo.png"
                    alt=""
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2">
                    {/* navigation items */}
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-neutral-700 text-white"
                            : "text-gray-300 hover:bg-yellow-400 hover:text-neutral-800",
                          "rounded-md px-3 py-2 text-lg font-medium no-underline"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-neutral-700 text-white"
                      : "text-gray-300 hover:bg-neutral-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

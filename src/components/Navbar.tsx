import { Popover } from '@headlessui/react'

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-44 py-10 fixed w-screen bg-[#00000029]">
        <h2 className="text-white font-bold w-20 text-center">
          JEZIEL <span className="font-normal">JUNIOR</span>
        </h2>
        <Popover className="relative">
          <Popover.Button>
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:cursor-pointer"
            >
              <circle
                cx="22.5"
                cy="22.5"
                r="22.5"
                fill="#C4C4C4"
                fill-opacity="0.29"
                className="hover:fill-current transition-colors"
              />
              <rect
                x="14"
                y="14"
                width="16.13"
                height="2.83905"
                fill="white"
                fill-opacity="0.5"
              />
              <rect
                x="14"
                y="21.4905"
                width="16.13"
                height="2.83905"
                fill="white"
                fill-opacity="0.5"
              />
              <rect
                x="14"
                y="28.981"
                width="16.13"
                height="2.83905"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 -left-12 mt-4">
            <div className="flex flex-col bg-[#00000029] w-36 h-80 justify-around items-center rounded-lg transition-opacity text-white">
              <a
                className="hover:bg-[#00000050] transition-colors w-36 py-10 text-center rounded-lg"
                href="/portfolio"
              >
                Portfolio
              </a>
              <a
                className="hover:bg-[#00000050] transition-colors w-36 py-10 text-center rounded-lg"
                href="/aboutme"
              >
                About Me
              </a>
              <a
                className="hover:bg-[#00000050] transition-colors w-36 py-10 text-center rounded-lg"
                href="/contact"
              >
                Get in touch
              </a>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </nav>
    </>
  )
}

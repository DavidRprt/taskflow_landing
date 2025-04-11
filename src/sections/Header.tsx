"use client"

import Image from "next/image"
import { Link as LinkScroll } from "react-scroll"
import { useState, useEffect } from "react"
import clsx from "clsx"

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const NavLink = ({ title }: { title: string }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-primary-4 uppercase transition-colors duration-500 cursor-pointer hover:text-primary-3 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  )

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-400 max-lg:py-4",
        hasScrolled && "md:!py-4 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2 flex items-center">
          <Image
            src="/logo.png"
            alt="TaskFlow Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-secondary-2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-md:px-4 before:absolute before:-right-64 before:top-2/5 before:h-[440px] before:w-[252px] before:bg-secondary-4 before:blur-[200px] before:content-[''] max-md:before:hidden">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="features" />
                  <div className="size-1.5 rounded-full bg-primary-2 max-lg:hidden" />
                  <NavLink title="pricing" />
                </li>

                <li className="relative flex flex-1 items-center justify-center">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <Image
                      src="/logo.png"
                      alt="TaskFlow Logo"
                      width={250}
                      height={125}
                      className="object-contain"
                    />
                  </LinkScroll>
                </li>

                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="faq" />
                  <div className="size-1.5 rounded-full bg-primary-2 max-lg:hidden" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <Image
                src="/bg-outlines.svg"
                alt="background"
                width={960}
                height={360}
                className="relative z-2"
              />
              <Image
                src="/bg-outlines-fill.png"
                alt="background"
                width={960}
                height={360}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-secondary-4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Image
            src={isOpen ? "/close.svg" : "/magic.svg"}
            alt="navbar button"
            width={60}
            height={60}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  )
}

export default Header

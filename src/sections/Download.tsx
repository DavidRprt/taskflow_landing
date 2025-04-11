"use client"

import { Element } from "react-scroll"
import { links, logos } from "../constants/index"
import Image from "next/image"

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="bg-gradient-to-b md:from-gradient-1-from md:to-gradient-1-to relative py-6 md:py-24"
      >
        <div className="flex items-center px-6 md:px-24">
          <div className="relative flex flex-col items-center md:items-start ">
            <div className="mb-10">
              <Image
                src="/logo.png"
                width={350}
                height={160}
                alt="taskflow logo"
              />
            </div>

            <p className="body-1 mb-10">
              Try it now for free on iOS, Android, PC, Web - whatever your
              flavor, weve got you covered.
            </p>

            <ul className="flex flex-wrap items-center gap-3 md:gap-8">
              {links.map(({ id, url, icon }) => (
                <li key={id}>
                  <a
                    href={url}
                    className="size-22 hover:border-secondary-4 relative flex items-center justify-center rounded-[50%] border-2 border-secondary-3 bg-secondary-1 transition duration-500"
                  >
                    <Image
                      src="/lines.svg"
                      alt="lines"
                      className="absolute size-13/20 object-contain"
                      width={0}
                      height={0}
                      layout="intrinsic"
                    />
                    <span className="download_tech-icon">{icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-6 mt-12 px-6 md:flex md:px-24 md:gap-12 md:mt-12">
          {logos.map(({ id, url, width, height, title }) => (
            <li key={id} className="flex justify-center items-center">
              <Image src={url} width={width} height={height} alt={title} />
            </li>
          ))}
        </ul>
      </Element>
    </section>
  )
}
export default Download

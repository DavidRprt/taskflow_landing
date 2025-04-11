"use client"

import { Element } from "react-scroll"

import { details, features } from "../constants/index"
import Button from "../components/Button"
import Image from "next/image"

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-secondary-3 rounded-4xl md:overflow-hidden max-md:flex-col feature-after md:bg-gradient-to-b md:from-gradient-1-from md:to-gradient-1-to max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, caption, title, text, button }) => (
              <div
                key={id}
                className="relative pt-10 md:pt-12 z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:bg-gradient-to-b max-md:from-gradient-1-from max-md:to-gradient-1-to max-md:border-2 max-md:border-secondary-3 max-md:rounded-3xl max-md:flex-320"
              >
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-primary-4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <div className="max-sm:mb-10">
                  <Button icon={button.icon}>{button.title}</Button>
                </div>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-secondary-3 rounded-7xl max-md:hidden">
              <div className="absolute bg-secondary-3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-secondary-3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-secondary-2 rounded-full hover:border-secondary-4 transition-all duration-500 shadow-500 size-20">
                    <Image
                      src={icon}
                      alt={title}
                      width={68}
                      height={68}
                      className="object-contain z-20 transition-transform duration-600 hover:scale-130"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}
export default Features

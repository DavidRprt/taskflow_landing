"use client"

import { Element, Link as LinkScroll } from "react-scroll"
import Button from "@/components/Button"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Task Management
            </div>
            <h1 className="mb-6 h3 md:h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Organize effortlessly
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-white">
              Taskflow AI helps you streamline your workflow with smart
              automation, intuitive task tracking, and seamless team
              collaboration—all in one place.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
          <div className="absolute top-72 max-sm:left-12 w-[400px] md:top-16 md:w-[660px] md:right-28 pointer-events-none ">
            <Image
              src="/hero.png"
              width={1360}
              height={800}
              className="max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero

"use client"

import { Element } from "react-scroll"
import { faq } from "../constants/index"
import FaqItem from "../components/FaqItem"
import Image from "next/image"

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2)

  return (
    <section className="relative">
      <Element name="faq" className="relative">
        {/* FAQ section container */}
        <div className="container relative z-2 py-28">
          <div>
            {/* Section title */}
            <h3 className="h3 relative z-5 max-md:h5  max-lg:max-w-md mb-7 text-primary-4">
              Curiosity didn’t kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You’ve got questions, we’ve got answers.
            </p>
          </div>

          {/* Center vertical line */}
          <div className="w-0.5 h-full absolute left-1/2 top-0 bg-secondary-2 max-sm:hidden -translate-x-1/2" />
        </div>

        <div className="relative z-2 border-b-2 border-b-secondary-2 bg-secondary-1 max-sm:border-secondary-1">
          {/* Glow effect to enhance visual appearance */}
          <div className="absolute left-1/2 top-[-160px] w-[320px] h-[320px] max-sm:w-[200px] max-sm:h-[200px] bg-secondary-4/25 mix-blend-soft-light blur-[200px] -translate-x-1/2" />

          {/* Central logo */}
          <div className="rounded-full absolute -top-10 left-1/2 z-4 flex size-20 items-center justify-center border-2 border-secondary-2 bg-secondary-1 -translate-x-1/2">
            <Image
              src="/faq-logo.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>

          {/* FAQ questions split into two columns */}
          <div className="container flex gap-10 max-lg:block">
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item) => (
                <FaqItem key={item.id} item={item} index={Number(item.id)} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item) => (
                <FaqItem key={item.id} item={item} index={Number(item.id)} />
              ))}
            </div>
          </div>

          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -z-1 bg-secondary-2 max-lg:hidden -translate-x-1/2" />
        </div>
      </Element>
    </section>
  )
}

export default Faq

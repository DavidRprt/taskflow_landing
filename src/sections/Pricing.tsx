"use client"

import { Element } from "react-scroll"
import { useState } from "react"
import clsx from "clsx"
import CountUp from "react-countup"
import { plans } from "../constants/index.jsx"
import Button from "../components/Button"
import Image from "next/image.js"

const Pricing = () => {
  const [monthly, setMonthly] = useState(false)

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className=" before:absolute before:-bottom-44 before:left-1/5 before:h-96 before:w-13/20 before:bg-secondary-4/50 before:blur-[200px] relative  border-l border-r border-secondary-2 bg-secondary-1/50 pb-40 pt-28  max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 text-center text-primary-4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-secondary-4/25 bg-secondary-1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx(
                  "text-[16px] font-bold leading-[24px] relative z-2 h-16 flex-1 uppercase text-primary-5 transition-colors duration-500 hover:text-primary-4",
                  monthly && "text-primary-4"
                )}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx(
                  "text-[16px] font-bold leading-[24px] relative z-2 h-16 flex-1 uppercase text-primary-5 transition-colors duration-500 hover:text-primary-4",
                  !monthly && "text-primary-4"
                )}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "bg-gradient-to-b max-md:from-gradient-2-from max-md:to-gradient-2-to rounded-2xl before:h-100 before:absolute before:-top-16 before:left-9 before:right-9 before:bg-secondary-4 before:blur-xl absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            <div className="pointer-events-none absolute -bottom-16 left-[calc(50%-480px)] z-2 mx-auto w-960 ">
              <Image
                src="/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
                priority
              />
              <Image
                src="/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
                objectFit="cover"
              />
            </div>
          </div>

          {/*  pricing section*/}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6 flex-col max-sm:items-center md:flex-row">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative max-md:w-full border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] my-5 lg:my-0 even:md:bg-gradient-to-b md:from-gradient-1-from md:to-gradient-1-to4]"
              >
                {index === 1 && (
                  <div className=" absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <Image
                    src={plan.logo}
                    alt={plan.title}
                    width={index === 1 ? 120 : 88}
                    height={index === 1 ? 120 : 88}
                    className="object-contain z-20 transition-transform duration-600 hover:scale-110"
                  />
                </div>

                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1
                        ? "border-primary-3 text-primary-3"
                        : "border-primary-1 text-primary-1"
                    )}
                  >
                    {plan.title}
                  </div>

                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-primary-3" : "text-primary-4"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      / mo
                    </div>
                  </div>
                </div>

                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-secondary-2 pb-9 text-center text-primary-4",
                    index === 1 && "border-b"
                  )}
                >
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <Image
                        src="/check.png"
                        alt="check"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-primary-3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing

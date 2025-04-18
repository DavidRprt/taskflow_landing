import { testimonials } from "../constants/index.jsx"
import TestimonialItem from "../components/TestimonialItem"

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2)

  return (
    <section className="relative z-2 py-6 md:py-24 px-6">
      <div className="container block lg:flex">
        <div className="flex flex-col max-sm:mb-3">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-primary-4">Words from our fans</h3>
        </div>

        <div className="-my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className=" flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

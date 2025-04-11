import { socials } from "../constants/index.jsx"
import Image from "next/image.js"
import { Github } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DavidRprt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-12 items-center justify-center rounded-full border-2 border-secondary-4/25 bg-secondary-1/5 transition-all duration-500 hover:border-secondary-4"
            >
              <Github size={24} className="text-primary-5" />
            </a>
            <span className="text-primary-5 body-4 ">
              Developed by David Rapoport
            </span>
          </div>

          <ul className="flex justify-center gap-3 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-secondary-4/25 bg-secondary-1/5 transition-all duration-500 hover:border-secondary-4"
                >
                  <Image
                    src={icon}
                    alt={title}
                    className="object-contain"
                    width={18}
                    height={18}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

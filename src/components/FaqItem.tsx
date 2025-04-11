import clsx from "clsx"
import { useState } from "react"
import { SlideDown } from "react-slidedown"
import "react-slidedown/lib/slidedown.css"
import { Plus, Minus } from "lucide-react"

const FaqItem = ({
  item,
  index,
}: {
  item: { id: string; question: string; answer: string }
  index: number
}) => {
  const [activeId, setActiveId] = useState<number | null>(null)
  const active = activeId === Number(item.id)

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between px-7 py-4 rounded-lg transition-all hover:border-secondary-4"
        onClick={() =>
          setActiveId(activeId === Number(item.id) ? null : Number(item.id))
        }
      >
        <div className="flex-1">
          <div className="text-sm text-primary-3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "text-lg font-medium text-primary-4 transition-colors duration-300",
              active && "text-primary-1"
            )}
          >
            {item.question}
          </div>
        </div>

        {/* Ícono de abrir/cerrar */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-secondary-2 shadow-md transition-all">
          {active ? (
            <Minus size={20} className="text-primary-1" />
          ) : (
            <Plus size={20} className="text-primary-3" />
          )}
        </div>
      </div>

      <SlideDown>
        {active && <div className="text-white px-7 py-3">{item.answer}</div>}
      </SlideDown>

      {/* Gradiente al abrir */}
      <div
        className={clsx(
          "absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl bg-gradient-to-b from-gradient-2-from/20 to-gradient-2-to/20 opacity-0 transition-opacity duration-500",
          active && "opacity-100"
        )}
      >
        <div className="absolute inset-0.5 -z-1 rounded-3xl bg-gradient-to-b from-gradient-2-from/30 to-transparent" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-primary-1" />
      </div>
    </div>
  )
}

export default FaqItem

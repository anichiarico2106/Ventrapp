import { useState } from 'react'

function FAQAccordion({ question, answer }) {

  const [open, setOpen] = useState(false)

  return (

    <div className="border-b border-gray-200">

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          justify-between
          items-center
          py-4
          text-left
        "
      >

        <span className="font-medium text-white">
          {question}
        </span>

        <span
          className={`
            transition-transform
            duration-300
            ${open ? 'rotate-180' : ''}
          `}
        >
          ▼
        </span>

      </button>

      {open && (

        <div className="pb-4 text-white/80 text-sm leading-relaxed">

          {answer}

        </div>

      )}

    </div>

  )

}

export default FAQAccordion
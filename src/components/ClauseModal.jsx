function ClauseModal({

  isOpen,
  onClose,
  onAccept

}) {
  if (!isOpen) return null

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/80
      flex
      items-center
      justify-center
      z-50
      p-6
    "
    >

      <div
        className="
        bg-white
        text-black
        max-w-3xl
        w-full
        rounded-3xl
        p-8
        max-h-[85vh]
        overflow-y-auto
      "
      >

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            XXXX
          </h2>

          <button
            onClick={onClose}
            className="
              text-2xl
              font-bold
            "
          >
            ×
          </button>

        </div>

        <div className="space-y-5 text-gray-700 leading-relaxed">

          <p>
            TEXTO LARGO
          </p>

          <p>
            TEXTO LARGO
          </p>

          <p>
            TEXTO LARGO
          </p>

          <p>
            TEXTO LARGO
          </p>

          <p>
            TEXTO LARGO
          </p>

          <p>
            TEXTO LARGO
          </p>

          <p>
            TEXTO LARGO
          </p>
          
            <div className="mt-10 flex gap-4">

            <button
                onClick={onAccept}
                className="
                flex-1
                bg-[#00C896]
                text-black
                font-bold
                py-4
                rounded-xl
                "
            >
                Acepto la cláusula
            </button>

            <button
                onClick={onClose}
                className="
                flex-1
                bg-gray-200
                py-4
                rounded-xl
                "
            >
                Cancelar
            </button>

            </div>
        </div>

      </div>

    </div>

  )

}

export default ClauseModal
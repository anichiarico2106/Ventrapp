function LegalModal({

  isOpen,
  onAccept,
  onClose

}) {

  if (!isOpen) return null

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/70
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
        max-w-2xl
        w-full
        rounded-3xl
        p-8
        max-h-[80vh]
        overflow-y-auto
      "
      >

        <h2 className="text-3xl font-bold mb-6">
          Términos y autorizaciones
        </h2>

        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

          <p>
            Ventra realiza procesos de validación laboral,
            gestión digital, administración operativa
            y análisis de riesgo asociados a la solicitud
            de crédito.
          </p>

          <p>
            El usuario declara conocer y aceptar
            los costos asociados a la operación,
            incluyendo interés financiero,
            gestión digital,
            validación laboral,
            protección de cartera
            e impuestos aplicables.
          </p>

          <p>
            Asimismo autoriza el tratamiento
            de sus datos personales conforme
            a la legislación colombiana vigente.
          </p>

          <p>
            La simulación presentada corresponde
            a una referencia informativa y está
            sujeta a validación y aprobación final.
          </p>

        </div>

        <div className="flex gap-4 mt-10">

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
            Acepto
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

  )

}

export default LegalModal
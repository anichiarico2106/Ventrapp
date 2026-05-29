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
              POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES — VENTRA
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
          <h2 className="text-xl font-bold text-black">
            1. Introducción
          </h2>

          <p>
            VENTRA reconoce la importancia de la seguridad, privacidad y protección de los datos personales de sus usuarios, trabajadores, aliados y empresas vinculadas.
          </p>

          <p>
            Por ello, adoptamos la presente Política de Tratamiento de Datos Personales de conformidad con la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas aplicables en Colombia relacionadas con la protección de datos personales.
          </p>

          <p>
            Al utilizar nuestra plataforma, el usuario autoriza el tratamiento de sus datos personales conforme a las condiciones establecidas en esta política.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            2. Responsable del Tratamiento de Datos
          </h2>

          <p>
            <strong>VENTRA S.A.S.</strong><br />
            Colombia<br />
            Correo electrónico: soporte@ventra.co<br />
            Sitio web: www.ventra.co
          </p>

          <p>
            VENTRA es responsable de la recolección, almacenamiento, uso, circulación y protección de los datos personales suministrados por los usuarios.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            3. Datos que recolectamos
          </h2>

          <p>
            VENTRA podrá recolectar información personal y financiera necesaria para la prestación de sus servicios, incluyendo:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Tipo y número de identificación</li>
            <li>Fecha de nacimiento</li>
            <li>Número de celular</li>
            <li>Correo electrónico</li>
            <li>Dirección</li>
            <li>Información laboral</li>
            <li>Información bancaria y financiera</li>
            <li>Historial de solicitudes</li>
            <li>Información de navegación dentro de la plataforma</li>
            <li>Datos requeridos para validación de identidad</li>
          </ul>

          <h2 className="text-xl font-bold text-black mt-8">
            4. Finalidad del tratamiento de datos
          </h2>

          <p>
            Los datos personales serán utilizados para:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Validar la identidad de los usuarios</li>
            <li>Gestionar solicitudes financieras</li>
            <li>Evaluar perfiles y procesos internos</li>
            <li>Brindar acceso a la plataforma</li>
            <li>Gestionar convenios empresariales</li>
            <li>Realizar procesos de atención y soporte</li>
            <li>Enviar notificaciones e información relacionada con los servicios</li>
            <li>Cumplir obligaciones legales y regulatorias</li>
            <li>Prevenir fraude, suplantación o actividades ilícitas</li>
            <li>Mejorar la experiencia de usuario y funcionamiento de la plataforma</li>
          </ul>

          <h2 className="text-xl font-bold text-black mt-8">
            5. Autorización del titular
          </h2>

          <p>
            El titular de los datos autoriza de manera previa, expresa e informada a VENTRA para realizar el tratamiento de sus datos personales conforme a esta política.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Registro en la plataforma</li>
            <li>Aceptación digital</li>
            <li>Formularios físicos o electrónicos</li>
            <li>Uso de los servicios ofrecidos por VENTRA</li>
          </ul>

          <h2 className="text-xl font-bold text-black mt-8">
            6. Derechos del titular de los datos
          </h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>Conocer, actualizar y rectificar sus datos</li>
            <li>Solicitar prueba de la autorización otorgada</li>
            <li>Ser informado sobre el uso de sus datos</li>
            <li>Presentar consultas o reclamos</li>
            <li>Solicitar la eliminación de sus datos cuando sea procedente</li>
            <li>Revocar la autorización otorgada</li>
            <li>Acceder gratuitamente a sus datos personales</li>
          </ul>

          <h2 className="text-xl font-bold text-black mt-8">
            7. Seguridad de la información
          </h2>

          <p>
            VENTRA implementa medidas técnicas, administrativas y organizacionales para proteger la información personal contra pérdida, acceso no autorizado, uso indebido, alteración o divulgación.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            8. Compartición de información
          </h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>Empresas aliadas o vinculadas mediante convenio</li>
            <li>Proveedores tecnológicos y operativos</li>
            <li>Entidades financieras</li>
            <li>Autoridades competentes cuando sea requerido legalmente</li>
          </ul>

          <p>
            En todos los casos, se adoptarán medidas razonables para proteger la información de los usuarios.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            9. Uso de cookies
          </h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>Mejorar la navegación</li>
            <li>Recordar preferencias</li>
            <li>Analizar comportamiento dentro de la plataforma</li>
            <li>Optimizar la experiencia del usuario</li>
          </ul>

          <p>
            El usuario podrá configurar su navegador para rechazar el uso de cookies.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            10. Consultas y reclamos
          </h2>

          <p>
            Los titulares podrán realizar consultas, solicitudes o reclamos relacionados con sus datos personales a través de:
          </p>

          <p>
            Correo electrónico: soporte@ventra.co
          </p>

          <p>
            VENTRA responderá dentro de los términos establecidos por la ley colombiana.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            11. Vigencia de la política
          </h2>

          <p>
            La presente Política de Tratamiento de Datos Personales entra en vigencia a partir de su publicación y podrá ser modificada en cualquier momento por VENTRA.
          </p>

          <p>
            Las modificaciones serán publicadas oportunamente en los canales oficiales de la plataforma.
          </p>

          <h2 className="text-xl font-bold text-black mt-8">
            12. Aceptación de la política
          </h2>

          <p>
            El uso de la plataforma VENTRA implica la aceptación de esta Política de Tratamiento de Datos Personales y de las condiciones aquí establecidas.
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
import MainLayout from '../layouts/MainLayout'

function SobreNosotros() {
  return (
    <MainLayout>

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* TÍTULO */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Quiénes Somos
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Presentación de <span className="text-[#00C896]">Ventra</span>
          </h1>

          <div className="w-24 h-1 bg-[#00C896] mx-auto mt-6 rounded-full" />

        </div>

        {/* CONTENIDO */}

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-lg leading-relaxed text-gray-300">

          <p>
            Somos una plataforma financiera colombiana enfocada en brindar
            soluciones de liquidez rápidas y accesibles para trabajadores y empresas.
          </p>

          <p>
            Nuestro objetivo principal es ayudar a las personas a resolver
            necesidades económicas del día a día de manera simple,
            digital y transparente, evitando procesos largos y complicados.
          </p>

          <p>
            En <span className="text-[#00C896] font-semibold">Ventra</span> creemos que acceder a una solución financiera
            no debería convertirse en una preocupación adicional.
            Por eso desarrollamos una experiencia moderna que permite realizar
            solicitudes de forma rápida y organizada, directamente desde cualquier dispositivo.
          </p>

          <p>
            Trabajamos mediante
            <span className="text-[#00C896] font-semibold"> convenios empresariales</span>
            {' '}que permiten ofrecer beneficios financieros a los trabajadores
            sin generar procesos complejos para las compañías.
          </p>

          <p>
            Nuestra
            <span className="text-[#00C896] font-semibold"> tecnología</span>
            {' '}está diseñada para simplificar cada etapa del proceso,
            brindando respuestas ágiles, mayor accesibilidad y una experiencia
            enfocada en la confianza y la facilidad de uso.
          </p>

          <p>
            <span className="text-[#00C896] font-semibold">Ventra</span> nace con la visión
            de transformar el bienestar financiero laboral en Colombia,
            conectando tecnología, rapidez y transparencia en una sola plataforma.
          </p>

        </div>

        {/* TARJETAS */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-[#00C896] font-bold text-xl mb-3">
              Personas
            </h3>
            <p className="text-sm text-gray-400">
              Enfocados en el bienestar financiero de los trabajadores.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-[#00C896] font-bold text-xl mb-3">
              Empresas
            </h3>
            <p className="text-sm text-gray-400">
              Alianzas que generan valor y bienestar para los equipos.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-[#00C896] font-bold text-xl mb-3">
              Rapidez
            </h3>
            <p className="text-sm text-gray-400">
              Soluciones ágiles cuando más las necesitas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-[#00C896] font-bold text-xl mb-3">
              Confianza
            </h3>
            <p className="text-sm text-gray-400">
              Transparencia y seguridad en cada proceso.
            </p>
          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default SobreNosotros
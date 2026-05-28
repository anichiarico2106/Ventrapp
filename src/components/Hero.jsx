import ventraLogo from './../assets/logo.png'
import Simulator from './Simulator'

        function Hero({

        creditData,
        setCreditData

        }) {
    return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <img
            src={ventraLogo}
            alt="Ventra"
            className="w-72 md:w-96 mb-4 drop-shadow-2xl"
          />

          <p className="text-[#00C896] tracking-[4px] uppercase text-sm font-semibold mb-6">
            FINTECH PARA TODOS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Solicita tu crédito
            en minutos
          </h1>

          <p className="text-gray-300 mt-6 text-xl leading-relaxed">
            Sin papeleos. Sin filas. 100% digital.
          </p>

          <button
            className="mt-10 bg-[#00C896] hover:bg-[#00b383]
            transition px-10 py-5 rounded-2xl
            font-bold text-black text-lg shadow-2xl"
          >
            QUIERO MI VENTRA
          </button>

        </div>

        {/* RIGHT */}

            <Simulator

            creditData={creditData}

            setCreditData={setCreditData}

            />

      </div>

    </section>
  )
}

export default Hero
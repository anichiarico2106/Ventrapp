import { useState } from 'react'
import {
  calculateCredit,
  formatCurrency
} from '../utils/finance'

function Simulator() {

  const [amount, setAmount] = useState(1000000)
  const [months, setMonths] = useState(1)

  const result =
    calculateCredit(amount, months)

  return (

    <div
      className="
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-8
      shadow-2xl
    "
    >

      <h2 className="text-3xl font-bold text-center mb-10">
        Simula tu crédito
      </h2>

      {/* MONTO */}

      <div className="mb-10">

        <label className="text-gray-300 text-lg">
          Monto
        </label>

        <input
          type="range"
          min="200000"
          max="5000000"
          step="50000"
          value={amount}
          onChange={(e) =>
            setAmount(Number(e.target.value))
          }
          className="
            w-full
            mt-4
            accent-[#00C896]
          "
        />

        <p className="text-5xl font-bold mt-8 text-center">
          {formatCurrency(amount)}
        </p>

      </div>

      {/* MESES */}

      <div className="mb-10">

        <label className="text-gray-300 text-lg">
          Plazo
        </label>

        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={months}
          onChange={(e) =>
            setMonths(Number(e.target.value))
          }
          className="
            w-full
            mt-4
            accent-[#00C896]
          "
        />

        <p className="text-3xl font-bold mt-8 text-center">
          {months} {months === 1 ? 'mes' : 'meses'}
        </p>

      </div>

      {/* RESULTADO */}

      <div className="bg-white text-black rounded-3xl p-8 text-center">

        <p className="text-gray-500 text-sm">
          Total a pagar
        </p>

        <h3 className="text-5xl font-bold mt-4">
          {formatCurrency(result.total)}
        </h3>

        <p className="text-sm text-gray-500 mt-3">
          Pago único al final del plazo
        </p>

        {/* DETALLE */}

        <details className="mt-8 text-left">

          <summary className="cursor-pointer text-sm text-gray-500 hover:text-black">
            Ver detalle
          </summary>

          <div className="mt-6 space-y-4 text-sm">

            <div className="flex justify-between">
              <span>Capital</span>
              <span>{formatCurrency(amount)}</span>
            </div>

            <div className="flex justify-between">
              <span>Interés financiero</span>
              <span>{formatCurrency(result.interest)}</span>
            </div>

            <div className="flex justify-between">
              <span>Gestión digital</span>
              <span>{formatCurrency(result.digitalManagement)}</span>
            </div>

            <div className="flex justify-between">
              <span>Validación laboral</span>
              <span>{formatCurrency(result.laborValidation)}</span>
            </div>

            <div className="flex justify-between">
              <span>Protección cartera</span>
              <span>{formatCurrency(result.portfolioProtection)}</span>
            </div>

            <div className="flex justify-between">
              <span>IVA</span>
              <span>{formatCurrency(result.iva)}</span>
            </div>

          </div>

        </details>

      </div>

    </div>

  )
}

export default Simulator
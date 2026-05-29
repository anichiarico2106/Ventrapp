import { useState } from 'react'
import Swal from 'sweetalert2'

import LegalModal from './LegalModal'
import ClauseModal from './ClauseModal'

import { supabase } from '../services/supabase'

function CreditForm({

  creditData

}) {

  const [loading, setLoading] = useState(false)

  const [accepted, setAccepted] = useState(false)

  const [acceptedClause, setAcceptedClause] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const [openClause, setOpenClause] = useState(false)

  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    empresa: '',
    ingresos: ''
  })

    const handleChange = (e) => {

      const { name, value } = e.target

      if (name === 'nombre') {

        const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')

        setFormData({
          ...formData,
          [name]: onlyLetters
        })

        return
      }

      if (
        name === 'cedula' ||
        name === 'telefono' ||
        name === 'ingresos'
      ) {

        const onlyNumbers = value.replace(/\D/g, '')

        setFormData({
          ...formData,
          [name]: onlyNumbers
        })

        return
      }

      setFormData({
        ...formData,
        [name]: value
      })
    }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const { data: existingUser } = await supabase
        .from('usuarios')
        .select('id')
        .eq('cedula', formData.cedula)
        .maybeSingle()
      // =========================
      // CREAR USUARIO
      // =========================
        if(Number(formData.ingresos) <= 0){

          Swal.fire({
            icon: 'warning',
            title: 'Ingreso inválido',
            text: 'El ingreso debe ser mayor a cero'
          })

          return
        }
      const { data: usuario, error: userError } =
        await supabase
          .from('usuarios')
          .insert([
          {
            nombre: formData.nombre,
            cedula: formData.cedula,
            telefono: formData.telefono,
            email: formData.email,
            empresa: formData.empresa,
            ingresos: formData.ingresos,
            estado: 'pendiente'
          }
          ])
          .select()
          .single()

      if(userError) throw userError

      // =========================
      // CREAR SOLICITUD
      // =========================

      const { error: solicitudError } =
        await supabase
          .from('solicitudes_credito')
          .insert([
            {

              usuario_id: usuario.id,

              monto: creditData.amount,

              meses: creditData.months,

              total_pagar: creditData.total,

              estado: 'pendiente',

              acepto_terminos: accepted,

              acepto_tratamiento_datos: acceptedClause,

              fecha_simulacion: new Date().toISOString()

            }
          ])

      if(solicitudError) throw solicitudError

      // =========================
      // AUDITORÍA
      // =========================

      await supabase
        .from('auditoria')
        .insert([
          {
            usuario_id: usuario.id,
            accion: 'solicitud_creada'
          }
        ])

      Swal.fire({
        icon: 'success',
        title: 'Solicitud enviada',
        text: 'Tu solicitud fue enviada correctamente',
        confirmButtonColor: '#00C896',
        background: '#0B1120',
        color: '#fff'
      })

      // RESET

      setFormData({

        nombre: '',
        cedula: '',
        telefono: '',
        empresa: '',
        ingresos: ''

      })

      setAccepted(false)

      setAcceptedClause(false)

    } catch (error) {

        console.error(error)

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar la solicitud',
        confirmButtonColor: '#00C896',
        background: '#0B1120',
        color: '#fff'
      })

    } finally {

      setLoading(false)

    }

  }

  return (

    <section
      id="formulario"
      className="px-6 pb-20"
    >

      <div
        className="
        max-w-3xl
        mx-auto
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-10
        shadow-2xl
      "
      >

        <h2 className="text-4xl font-bold text-center mb-3">
          Solicita tu Ventra
        </h2>

        <p className="text-gray-300 text-center mb-10">
          Completa el formulario y recibe una respuesta rápida.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
              border border-gray-700
            "
          />

          <input
            type="text"
            name="cedula"
            placeholder="Número de cédula"
            required
            value={formData.cedula}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
              border border-gray-700
            "
          />

          <input
            type="text"
            name="telefono"
            placeholder="Número de celular"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
              border border-gray-700
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
              border border-gray-700
            "
          />

          <input
            type="text"
            name="empresa"
            placeholder="Empresa donde trabaja"
            required
            value={formData.empresa}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
              border border-gray-700
            "
          />

          <input
            type="number"
            name="ingresos"
            placeholder="Ingreso mensual"
            required
            value={formData.ingresos}
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-xl
              bg-[#111827]
              border border-gray-700
            "
          />

          <div className="space-y-6">

            {/* TERMINOS */}

            <label
              className="
              flex
              items-start
              gap-3
              text-sm
              text-gray-300
            "
            >

              <input
                type="checkbox"
                checked={accepted}
                onChange={() => {

                  if(!accepted){

                    setOpenModal(true)

                  } else {

                    setAccepted(false)

                  }

                }}
                className="mt-1"
              />

              <span>
                He leído y acepto los términos,
                costos y autorizaciones asociados
                a la solicitud de crédito.
              </span>

            </label>

            {/* CLAUSULA */}

            <label
              className="
              flex
              items-start
              gap-3
              text-sm
              text-gray-300
            "
            >

              <input
                type="checkbox"
                checked={acceptedClause}
                onChange={() => {

                  if(!acceptedClause){

                    setOpenClause(true)

                  } else {

                    setAcceptedClause(false)

                  }

                }}
                className="mt-1"
              />

              <span>
                He leído y acepto el tratamiento de datos.
              </span>

            </label>

          </div>

          <button
            type="submit"
            disabled={
              loading ||
              !accepted ||
              !acceptedClause
            }
            className={`
              w-full
              py-4
              rounded-xl
              font-bold
              transition-all
              duration-300

              ${
                loading ||
                !accepted ||
                !acceptedClause
                  ? 'bg-gray-600 text-white cursor-not-allowed'
                  : 'bg-[#00C896] text-black hover:bg-[#00b383]'
              }
            `}
          >

            {
              loading
                ? 'ENVIANDO...'
                : 'ENVIAR SOLICITUD'
            }

          </button>

        </form>

      </div>

      <LegalModal

        isOpen={openModal}

        onAccept={() => {

          setAccepted(true)

          setOpenModal(false)

        }}

        onClose={() => {

          setAccepted(false)

          setOpenModal(false)

        }}

      />

      <ClauseModal

        isOpen={openClause}

        onAccept={() => {

          setAcceptedClause(true)

          setOpenClause(false)

        }}

        onClose={() => {

          setAcceptedClause(false)

          setOpenClause(false)

        }}

      />

    </section>

  )

}

export default CreditForm
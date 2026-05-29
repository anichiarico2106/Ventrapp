import MainLayout from '../layouts/MainLayout'
import FAQAccordion from '../components/FAQAccordion'

const faqSections = [
  {
    title: 'Sobre Ventra',
    questions: [
      {
        question: '¿Qué es Ventra?',
        answer: 'Ventra es una plataforma financiera digital enfocada en brindar soluciones de liquidez rápidas y accesibles para trabajadores y empresas.'
      },
      {
        question: '¿Cómo funciona Ventra?',
        answer: 'Ventra conecta empresas y trabajadores mediante convenios que permiten acceder a beneficios y soluciones financieras de forma simple y digital.'
      },
      {
        question: '¿Quiénes pueden usar Ventra?',
        answer: 'Los trabajadores de empresas aliadas que tengan convenio activo con nuestra plataforma.'
      },
      {
        question: '¿Ventra tiene algún costo para los trabajadores?',
        answer: 'Las condiciones pueden variar según el convenio empresarial y los servicios utilizados.'
      },
      {
        question: '¿Es seguro usar Ventra?',
        answer: 'Sí. Utilizamos herramientas y procesos diseñados para proteger la información y brindar una experiencia segura.'
      },
      {
        question: '¿Cómo sé si mi empresa tiene convenio con Ventra?',
        answer: 'Puedes consultarlo directamente con tu empresa o comunicarte con nuestro equipo de soporte.'
      }
    ]
  },

  {
    title: 'Créditos y Solicitudes',
    questions: [
      {
        question: '¿Cómo solicito un crédito o adelanto?',
        answer: 'Solo debes ingresar a la plataforma y completar la solicitud desde cualquier dispositivo.'
      },
      {
        question: '¿Cuánto tarda la aprobación?',
        answer: 'Nuestro sistema está diseñado para brindar respuestas rápidas y ágiles.'
      },
      {
        question: '¿Qué requisitos necesito cumplir?',
        answer: 'Los requisitos pueden variar según el convenio empresarial y el perfil del usuario.'
      },
      {
        question: '¿Cómo recibo el dinero?',
        answer: 'El desembolso se realiza según las condiciones establecidas dentro de la plataforma.'
      },
      {
        question: '¿Puedo solicitar más de un beneficio?',
        answer: 'Sí, dependiendo de las condiciones disponibles para cada usuario.'
      },
      {
        question: '¿Puedo pagar anticipadamente?',
        answer: 'Sí. Puedes realizar pagos anticipados según las condiciones aplicables.'
      }
    ]
  },

  {
    title: 'Pagos y Devoluciones',
    questions: [
      {
        question: '¿Qué métodos de pago están disponibles?',
        answer: 'Contamos con diferentes métodos de pago digitales para facilitar el proceso.'
      },
      {
        question: '¿Qué pasa si no puedo pagar a tiempo?',
        answer: 'Te recomendamos comunicarte con soporte para revisar las alternativas disponibles.'
      },
      {
        question: '¿Ventra cobra intereses o penalidades?',
        answer: 'Las condiciones financieras son informadas de manera transparente antes de cada solicitud.'
      },
      {
        question: '¿Puedo cambiar mi fecha de pago?',
        answer: 'Dependiendo del caso y las condiciones del servicio, pueden existir alternativas de ajuste.'
      },
      {
        question: '¿Dónde puedo consultar mis pagos?',
        answer: 'Desde tu perfil dentro de la plataforma podrás revisar la información disponible.'
      }
    ]
  },

  {
    title: 'Convenios y Empresas',
    questions: [
      {
        question: '¿Cómo puede una empresa trabajar con Ventra?',
        answer: 'Las empresas pueden realizar convenios con Ventra para ofrecer beneficios financieros a sus trabajadores.'
      },
      {
        question: '¿Qué beneficios obtiene mi empresa?',
        answer: 'Ventra ayuda a fortalecer el bienestar financiero, la motivación y la experiencia de los trabajadores.'
      },
      {
        question: '¿Ventra reemplaza otros beneficios empresariales?',
        answer: 'No. Ventra funciona como un complemento que aporta valor adicional a los equipos de trabajo.'
      },
      {
        question: '¿Qué tipo de empresas pueden vincularse?',
        answer: 'Empresas de diferentes sectores que quieran ofrecer beneficios modernos y accesibles a sus trabajadores.'
      },
      {
        question: '¿La integración es complicada?',
        answer: 'No. Nuestro proceso está diseñado para ser rápido, simple y organizado.'
      }
    ]
  },

  {
    title: 'Cuenta y Seguridad',
    questions: [
      {
        question: '¿Cómo creo mi cuenta?',
        answer: 'Puedes registrarte directamente desde la plataforma en pocos minutos.'
      },
      {
        question: '¿Cómo recupero mi contraseña?',
        answer: 'Desde la opción de recuperación podrás restablecer el acceso a tu cuenta.'
      },
      {
        question: '¿Ventra protege mis datos personales?',
        answer: 'Sí. La protección y privacidad de la información es una de nuestras prioridades.'
      },
      {
        question: '¿Puedo cambiar mi número o correo?',
        answer: 'Sí. Puedes actualizar tu información desde tu perfil o mediante soporte.'
      },
      {
        question: '¿Desde dónde puedo acceder a Ventra?',
        answer: 'Desde cualquier dispositivo con conexión a internet.'
      }
    ]
  },

  {
    title: 'Soporte y Contacto',
    icon: '',
    questions: [
      {
        question: '¿Cómo puedo comunicarme con Ventra?',
        answer: 'A través de nuestros canales oficiales de atención y soporte.'
      },
      {
        question: '¿En qué horarios está disponible el soporte?',
        answer: 'Nuestro equipo atiende dentro de los horarios establecidos en los canales oficiales.'
      },
      {
        question: '¿Dónde puedo reportar un problema?',
        answer: 'Puedes comunicarte directamente con soporte desde la plataforma o nuestros canales de atención.'
      },
      {
        question: '¿Ventra ofrece atención personalizada?',
        answer: 'Sí. Nuestro equipo está disponible para ayudarte durante el proceso.'
      },
      {
        question: '¿Cómo puedo enviar una PQRS?',
        answer: 'Puedes hacerlo mediante nuestros canales oficiales de contacto y atención.'
      }
    ]
  }
]

function FAQ() {

  return (

    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold">
            Preguntas <span className="text-[#00C896]">Frecuentes</span>
          </h1>

          <div className="w-24 h-1 bg-[#00C896] mx-auto mt-5 rounded-full" />

          <p className="text-gray-400 mt-6">
            Resolvemos las dudas más comunes sobre Ventra para que tengas una experiencia rápida, segura y transparente.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {faqSections.map((section) => (

            <div
              key={section.title}
              className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
              "
            >

              <div className="flex items-center gap-3 mb-6">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#00C896]/10
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  {section.icon}
                </div>

                <h2 className="text-xl font-bold text-[#00C896]">
                  {section.title}
                </h2>

              </div>
              {section.questions.map((item) => (

                <FAQAccordion
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />

              ))}

            </div>

          ))}

        </div>

      </section>

    </MainLayout>

  )

}

export default FAQ
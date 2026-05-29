import { Link, NavLink } from 'react-router-dom'
import ventraLogo from '../assets/logo.png'

function Navbar() {
  return (
        <header
        className="
            sticky
            top-0
            z-50
            w-full
            border-b
            border-white/10
            bg-[#020B2D]
        "
        >
      <nav
        className="
          max-w-7xl
          mx-auto
          h-24
          flex
          items-center
          justify-center
          gap-12
          px-6
        "
      >

        {/* LOGO */}

        <Link to="/">
          <img
            src={ventraLogo}
            alt="Ventra"
            className="h-16 w-auto"
          />
        </Link>

        {/* MENÚ */}

        <NavLink
          to="/empresas"
          className="font-medium"
        >
          Empresas
        </NavLink>

        <NavLink
          to="/nosotros"
          className="font-medium"
        >
          Sobre Nosotros
        </NavLink>

        <NavLink
          to="/preguntas-frecuentes"
          className="font-medium"
        >
          Preguntas Frecuentes
        </NavLink>

        <NavLink
          to="/contacto"
          className="font-medium"
        >
          Contacto
        </NavLink>

      </nav>
    </header>
  )
}

export default Navbar
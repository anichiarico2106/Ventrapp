import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Empresas from '../pages/Empresas'
import SobreNosotros from '../pages/SobreNosotros'
import FAQ from '../pages/FAQ'
import Contacto from '../pages/Contacto'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route
          path="/empresas"
          element={<Empresas />}
        />

        <Route
          path="/nosotros"
          element={<SobreNosotros />}
        />

        <Route
          path="/preguntas-frecuentes"
          element={<FAQ />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
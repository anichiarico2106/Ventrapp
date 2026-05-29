import { useState } from 'react'

import MainLayout from '../layouts/MainLayout'

import Hero from '../components/Hero'
import CreditForm from '../components/CreditForm'

function Home() {

  const [creditData, setCreditData] = useState({
    amount: 1000000,
    months: 1,
    total: 0
  })

  return (
    <MainLayout>

      <Hero
        creditData={creditData}
        setCreditData={setCreditData}
      />

      <CreditForm
        creditData={creditData}
      />

    </MainLayout>
  )
}

export default Home
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value)
}

export const calculateCredit = (amount, months) => {

  const interest =
    amount * 0.025 * months

  const digitalManagement =
    amount * 0.03 * months

  const laborValidation =
    amount * 0.02 * months

  const portfolioProtection =
    amount * 0.015 * months

  const iva =
    (
      digitalManagement +
      laborValidation +
      portfolioProtection
    ) * 0.19

  const total =
    amount +
    interest +
    digitalManagement +
    laborValidation +
    portfolioProtection +
    iva

  return {
    interest,
    digitalManagement,
    laborValidation,
    portfolioProtection,
    iva,
    total
  }
}
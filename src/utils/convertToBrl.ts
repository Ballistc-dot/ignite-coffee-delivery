export function convertToBrl(value: number) {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}

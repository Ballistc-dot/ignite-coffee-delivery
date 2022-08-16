import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { TextBase } from '../../../../styles/Tipograph'
import {
  PaymentContainer,
  PaymentContent,
  PaymentHeader,
  PaymentHeaderTexts,
  PaymentMethods,
} from './styles'

export const paymentsMethods = [
  {
    name: 'cartão de crédito',
    type: 'credit',
    icon: <CreditCard size={16} />,
  },
  {
    name: 'cartão de débito',
    type: 'debit',
    icon: <Bank size={16} />,
  },
  {
    name: 'dinheiro',
    type: 'money',
    icon: <Money size={16} />,
  },
]
export function PaymentChoise() {
  const { register } = useFormContext()
  const { colors } = useTheme()

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} color={colors['brand-purple']} />
        <PaymentHeaderTexts>
          <TextBase fontFamily="Roboto" size="m" color="subtitle">
            Pagamento
          </TextBase>
          <TextBase fontFamily="Roboto" size="s" color="text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </TextBase>
        </PaymentHeaderTexts>
      </PaymentHeader>
      <PaymentMethods>
        {paymentsMethods.map((payment) => (
          <div key={payment.type}>
            <input
              type="radio"
              id={payment.type}
              value={payment.type}
              {...register('paymentMethod')}
            />
            <label htmlFor={payment.type}>
              <PaymentContent>
                {payment.icon}
                {payment.name}
              </PaymentContent>
            </label>
          </div>
        ))}
      </PaymentMethods>
    </PaymentContainer>
  )
}

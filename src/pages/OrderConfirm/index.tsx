import { TextBase, TitleBase } from '../../styles/Tipograph'
import { OrderConfirmContainer, OrderInfo, OrderInfoContainer } from './styles'
import MotoboyImage from '../../assets/motoboy.png'
import { CheckoutFormData } from '../Checkout'
import { InfoCard } from './Components/InfoCard'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymentsMethods } from '../Checkout/components/PaymentChoise'

interface LocationProp {
  state: CheckoutFormData
}

export function OrderConfirm() {
  const { state } = useLocation() as unknown as LocationProp
  const navigate = useNavigate()
  const paymentFormated = paymentsMethods.filter(
    (value) => value.type === state.paymentMethod,
  )[0].name
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])
  if (!state) return <></>
  return (
    <OrderConfirmContainer className="container">
      <title>Uhu pedido confirmado!</title>
      <TitleBase fontFamily="Baloo" size="l" color="yellow_dark">
        Uhu! Pedido confirmado
      </TitleBase>
      <TextBase fontFamily="Roboto" size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </TextBase>
      <OrderInfoContainer>
        <OrderInfo>
          <InfoCard
            color="purple"
            icon={<MapPin weight="fill" size={16} color="#FFF" />}
          >
            Entrega em{' '}
            <strong>
              {state.street}, {state.number}
            </strong>
            <br />
            {state.neighborhood} - {state.city}, {state.state}
          </InfoCard>
          <InfoCard
            color="yellow"
            icon={<Timer weight="fill" size={16} color="#FFF" />}
          >
            Previsão de entrega <br />
            <strong>20min - 30min</strong>
          </InfoCard>
          <InfoCard
            color="yellow_dark"
            icon={<CurrencyDollar weight="fill" size={16} color="#FFF" />}
          >
            Pagamento de entrega <br />
            <strong>{paymentFormated}</strong>
          </InfoCard>
        </OrderInfo>
        <img src={MotoboyImage} alt="imagem de um motoboy" />
      </OrderInfoContainer>
    </OrderConfirmContainer>
  )
}

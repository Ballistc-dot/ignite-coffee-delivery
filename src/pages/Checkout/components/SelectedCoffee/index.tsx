import { useCart } from '../../../../hooks/useCart'
import { convertToBrl } from '../../../../utils/convertToBrl'
import { CoffeeCard } from '../CoffeeCard'
import {
  SelectedCoffeeContent,
  SelectedCoffeeFooter,
  SelectedCoffeesContainer,
  CheckoutTitle,
  FooterTextContainer,
  FooterTotalContainer,
  ConfirmButton,
} from './styles'

export function SelectedCoffee() {
  const { cart, cartTotal } = useCart()
  const finalPrice = convertToBrl(cartTotal + 3.5)
  const formatedTotal = convertToBrl(cartTotal)
  return (
    <SelectedCoffeesContainer>
      <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      <SelectedCoffeeContent>
        {cart.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            image={coffee.image}
            name={coffee.name}
            price={coffee.price}
            quantity={coffee.quantity}
          />
        ))}
        <SelectedCoffeeFooter>
          <FooterTextContainer>
            <span>Total de itens</span>
            <span>R${formatedTotal}</span>
          </FooterTextContainer>
          <FooterTextContainer>
            <span>Entrega</span>
            <span>R$3,50</span>
          </FooterTextContainer>
          <FooterTotalContainer>
            <span>Total</span>
            <span>R${finalPrice}</span>
          </FooterTotalContainer>
          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
        </SelectedCoffeeFooter>
      </SelectedCoffeeContent>
    </SelectedCoffeesContainer>
  )
}

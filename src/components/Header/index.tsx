import {
  CartItensNumber,
  HeaderButtons,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles'
import logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  const cartItemsQuantity = cart.length

  return (
    <HeaderContainer className="container">
      <a href="/">
        <img src={logo} alt="logo coffee delivery" />
      </a>
      <HeaderButtonsContainer>
        <HeaderButtons color="purple">
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </HeaderButtons>
        <HeaderButtons color="yellow">
          <CartItensNumber to="/checkout">
            <span>{cartItemsQuantity}</span>
          </CartItensNumber>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </HeaderButtons>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
/** 
 * 
 * 
 *     width: 2rem;
    height: 2rem;
    position: absolute;
*/

import {
  CartItensNumber,
  HeaderButtons,
  HeaderButtonsContainer,
  HeaderContainer,
} from './styles'
import logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer className="container">
      <img src={logo} alt="logo coffee delivery" />
      <HeaderButtonsContainer>
        <HeaderButtons color="purple">
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </HeaderButtons>
        <HeaderButtons color="purple">
          <CartItensNumber>
            <span>2</span>
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

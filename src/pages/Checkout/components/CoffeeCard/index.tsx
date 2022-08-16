import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { CoffeesProps } from '../../../../fakes/coffees'
import { useCart } from '../../../../hooks/useCart'
import { TextBase } from '../../../../styles/Tipograph'
import { convertToBrl } from '../../../../utils/convertToBrl'
import {
  SelectedCoffeeButtons,
  SelectedCoffeeCard,
  SelectedCoffeeContainer,
  SelectedCoffeeContent,
} from './styles'

interface CoffeeCardProps extends CoffeesProps {
  quantity: number
}

export function CoffeeCard({
  id,
  image,
  name,
  price,
  quantity,
}: CoffeeCardProps) {
  const [qnty, setQnty] = useState(quantity)
  const { changeCartItemQuantity, removeFromCart } = useCart()
  function handleIncrease() {
    setQnty((state) => {
      if (state < 99) {
        const newState = state + 1

        changeCartItemQuantity(id, 'increase')

        return newState
      } else {
        return state
      }
    })
  }
  function handleDecrease() {
    setQnty((state) => {
      if (state !== 0) {
        const newState = state - 1
        changeCartItemQuantity(id, 'decrease')
        return newState
      } else {
        return state
      }
    })
  }
  function handleRemove() {
    removeFromCart(id)
  }
  const totalPrice = price * quantity
  const formatedPrice = convertToBrl(totalPrice)
  return (
    <SelectedCoffeeContainer>
      <SelectedCoffeeCard>
        <SelectedCoffeeContent>
          <img src={`/coffees/${image}`} alt="imagem do café" />
          <div>
            <TextBase fontFamily="Roboto" size="m" color="subtitle">
              {name}
            </TextBase>
            <SelectedCoffeeButtons>
              <Counter
                size="md"
                value={qnty}
                increase={handleIncrease}
                decrease={handleDecrease}
              />
              <button type="button" onClick={handleRemove}>
                <Trash size={16} color="#8047F8" />
                Remover
              </button>
            </SelectedCoffeeButtons>
          </div>
        </SelectedCoffeeContent>
        <span>R$ {formatedPrice}</span>
      </SelectedCoffeeCard>
    </SelectedCoffeeContainer>
  )
}

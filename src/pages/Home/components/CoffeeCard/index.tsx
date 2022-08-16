import {
  AddToCartButton,
  CoffeeContainer,
  CoffeeContent,
  CoffeeFooter,
  CoffeePrice,
  CoffeeSifra,
  Tag,
  TagsContainer,
} from './styles'
import { CoffeesProps } from '../../../../fakes/coffees'
import { useState } from 'react'
import { convertToBrl } from '../../../../utils/convertToBrl'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../hooks/useCart'
import { TextBase, TitleBase } from '../../../../styles/Tipograph'

export function CoffeeCard({
  name,
  description,
  tags,
  image,
  price,
  id,
}: CoffeesProps) {
  const [qnty, setQnty] = useState(0)
  const { addToCart } = useCart()

  const formatedPrice = convertToBrl(price)

  function handleIncrease() {
    setQnty((state) => (state < 99 ? state + 1 : state))
  }
  function handleDecrease() {
    setQnty((state) => (state !== 0 ? state - 1 : state))
  }

  function handleAddToCard() {
    const coffee = {
      id,
      image,
      price,
      quantity: qnty,
      name,
    }
    addToCart(coffee)
  }

  return (
    <CoffeeContainer>
      <img src={`/coffees/${image}`} alt="" />
      <TagsContainer>
        {tags?.map((tag) => (
          <Tag key={tag.length * Math.random() * 1.349882}>{tag}</Tag>
        ))}
      </TagsContainer>
      <CoffeeContent>
        <TitleBase fontFamily="Baloo" size="s" color="subtitle">
          {name}
        </TitleBase>
        <TextBase fontFamily="Roboto" size="s" color="label">
          {description}
        </TextBase>
      </CoffeeContent>
      <CoffeeFooter>
        <CoffeePrice>
          <CoffeeSifra>R$</CoffeeSifra>
          {formatedPrice}
        </CoffeePrice>
        <Counter
          value={qnty}
          increase={handleIncrease}
          decrease={handleDecrease}
        />
        <AddToCartButton disabled={qnty === 0} onClick={handleAddToCard}>
          <ShoppingCart size={22} weight="fill" color="#ffff" />
        </AddToCartButton>
      </CoffeeFooter>
    </CoffeeContainer>
  )
}

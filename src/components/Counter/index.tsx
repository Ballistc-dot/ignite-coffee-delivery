import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  value: number
  increase(): void
  decrease(): void
  size?: 'md' | 'lg'
}

export function Counter({
  value,
  increase,
  decrease,
  size = 'lg',
}: CounterProps) {
  return (
    <CounterContainer size={size}>
      <button type="button" onClick={decrease}>
        <Minus size={14} />
      </button>
      <input type="number" value={value} min={0} contentEditable={false} />
      <button type="button" onClick={increase}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
/*

66+986,4+870-136

*/

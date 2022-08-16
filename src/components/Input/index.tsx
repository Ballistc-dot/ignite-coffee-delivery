import { ErrorMessage } from '@hookform/error-message'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer, InputComponent } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  type?: string
  width?: 'sm' | 'md' | 'lg' | 'all'
}

export function Input({
  name,
  placeholder,
  type,
  width = 'md',
  className,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <InputContainer className={className}>
      <InputComponent
        width={width}
        {...register(name, { valueAsNumber: name === 'number' })}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
    </InputContainer>
  )
}

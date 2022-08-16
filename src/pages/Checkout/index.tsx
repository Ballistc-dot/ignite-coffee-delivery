import { FormProvider, useForm } from 'react-hook-form'
import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffee } from './components/SelectedCoffee'
import {
  CheckoutContainer,
  CompleteYourOrder,
  CompleteYourOrderContent,
  CheckoutFormContainer,
  FormHeader,
  FormHeaderText,
  FormContainer,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { MapPinLine } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { PaymentChoise } from './components/PaymentChoise'
import { TitleBase } from '../../styles/Tipograph'

// eslint-disable-next-line no-unused-vars
enum PaymentMethods {
  // eslint-disable-next-line no-unused-vars
  credit = 'credit',
  // eslint-disable-next-line no-unused-vars
  debit = 'debit',
  // eslint-disable-next-line no-unused-vars
  money = 'money',
}

const CheckoutFormValidationSchema = zod.object({
  zip_code: zod
    .string()
    .min(1, 'informe um cep valido')
    .max(9, 'informe um cep valido'),
  street: zod.string().min(1, 'Campo obrigatório!'),
  number: zod.number({ required_error: 'a' }).min(1, 'Campo obrigatório!'),

  complement: zod.string().nullable(),
  neighborhood: zod.string().min(1, 'Campo obrigatório!'),
  city: zod.string().min(1, 'Campo obrigatório!'),
  state: zod.string().min(1, 'Campo obrigatório!'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type CheckoutFormData = zod.infer<typeof CheckoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cart } = useCart()
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormValidationSchema),
    defaultValues: {},
  })
  const { handleSubmit } = checkoutForm

  useEffect(() => {
    if (!cart.length) {
      navigate('/')
    }
  }, [cart, navigate])

  function onSubmit(data: CheckoutFormData) {
    console.log(data)
    navigate('/orderConfirm', { state: data })
  }
  if (!cart.length) return <></>
  return (
    <CheckoutContainer className="container">
      <title>Checkout</title>

      <FormProvider {...checkoutForm}>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <CompleteYourOrder>
            <TitleBase color="subtitle" size="xs" fontFamily="Baloo">
              Complete seu pedido
            </TitleBase>
            <CompleteYourOrderContent>
              <CheckoutFormContainer>
                <FormHeader>
                  <MapPinLine size={22} color="#C47F17" />
                  <FormHeaderText>
                    <span>Endereço de Entrega</span>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </FormHeaderText>
                </FormHeader>
                <CheckoutForm />
              </CheckoutFormContainer>
              <PaymentChoise />
            </CompleteYourOrderContent>
          </CompleteYourOrder>
          <SelectedCoffee />
        </FormContainer>
      </FormProvider>
    </CheckoutContainer>
  )
}

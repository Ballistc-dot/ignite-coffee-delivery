import { FormContainer, FormContent, PersonalyInput } from './styles'
import { Input } from '../../../../components/Input'

export function CheckoutForm() {
  return (
    <FormContainer>
      <FormContent>
        <Input className="cep" name="zip_code" placeholder="CEP" />
        <Input className="street" name="street" placeholder="Rua" width="all" />
        <Input name="number" placeholder="Número" />
        <PersonalyInput className="complement">
          <Input
            type="complement"
            name="complement"
            placeholder="Complemento"
          />{' '}
          <span>opicional</span>
        </PersonalyInput>

        <Input name="neighborhood" placeholder="Bairro" />
        <Input name="city" placeholder="Cidade" width="lg" />
        <Input name="state" placeholder="UF" width="sm" />
      </FormContent>
    </FormContainer>
  )
}

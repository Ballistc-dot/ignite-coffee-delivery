import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme/default'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App

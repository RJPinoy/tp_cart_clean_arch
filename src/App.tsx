import './App.css'
import * as React from 'react'
import ProductComponent from './components/ProductComponent'
import CartComponent from './components/CartComponent'

function App() {
  const [update, setUpdate] = React.useState(0);

  return (
    <>
      <ProductComponent setUpdate={ setUpdate } />
      <CartComponent update={ update }/>
    </>
  )
}

export default App
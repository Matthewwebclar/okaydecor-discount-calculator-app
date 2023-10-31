import { useRef, useState } from 'react'
import Calculator from "./components/Calculator"

import SocialFollow from './components/SocialFollow'

export default function App() {
  const priceInputRef = useRef()

  const [state, setState] = useState(() => {
    return {
      price: '',
      discount: '',
    }
  })

  const onChangeInput = (event) => {
    var field = event.target

    setState((prevState) => {
      return {
        ...prevState,
        [field.name]: field.value,
      }
    })
  }

  return (
    <>
      <header className="banner">
        <h1 className="text-3xl font-bold leading-10 font-mono">Calculate Discount 💹</h1>
      </header>

      <div>

        <h2 className='text-center mb-4 text-xl'>
          Please provide any 2 values below to calculate.
        </h2>
      </div>
      {/*Calculator*/}
      <div className="container-wrapper">
        <Calculator
          price={state.price}
          priceInputRef={priceInputRef}
          discount={state.discount}
          onChangeInput={onChangeInput}
        />
        <p className='text-medium mb-4'>
          A percentage off of a price refers to getting some percent, say 10%, off of the original price of the product or service 👌.
        </p>
      </div>

      {/*Social Media*/}
      <SocialFollow />
    </>
  )
}
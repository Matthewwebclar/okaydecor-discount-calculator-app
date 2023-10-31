import PropTypes from 'prop-types'
import Displayer from './Displayer'
import Label from "./Label"
import { calculateSalePrice, calculateSaving } from '../lib/dicountCalculation'

const Calculator = ({
  price,
  discount,
  priceInputRef,
  onChangeInput,
}) => {

  //Type Checking
  Calculator.propTypes = {
    price: PropTypes.string,
    discount: PropTypes.string,
    description: PropTypes.string,
    priceInputRef: PropTypes.object,
    onChangeInput: PropTypes.func.isRequired,
  }

  const saving = calculateSaving(price, discount)
  const salePrice = calculateSalePrice(price, saving)

  return (
    <div className="calculation-panel my-10">

      <div className="box">
        <form action=''
          onSubmit={(e) => {
            e.preventDefault()
          }}

        >
          <div className="grid grid-cols-2 gap-4">

            {/* Description*/}


            {/* Price*/}
            <div className="col-span-2">
              <Label inputFor='price' text='Price' />
              <input
                className="input"
                id="price"
                type='number'
                min="0.1"
                max="1000000000000"
                step="0.001"
                required
                placeholder="0.00"
                name="price"
                value={price}
                ref={priceInputRef}
                onChange={onChangeInput}
              />
            </div>

            {/* Discount*/}
            <div className="col-span-2">
              <Label inputFor='discount' text='Discount %' />
              <input
                className="input"
                id="discount"
                type='number'
                min="0"
                max="100"
                onChange={onChangeInput}
                required
                placeholder="0.00"
                name="discount"
                value={discount}
              />
            </div>
          </div>
        </form>
      </div>

      <Displayer
        salePrice={salePrice}
        price={price.toString()}
        discount={discount.toString()}
        saving={saving}
      />
    </div>
  )
}

export default Calculator

import PropTypes from 'prop-types'
import { formatNumber } from '../lib/format'

const Displayer = ({
  saving,
  discount,
  salePrice,
}) => {
  //Type checking
  Displayer.propTypes = {
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    saving: PropTypes.number.isRequired,
    salePrice: PropTypes.number.isRequired,
    description: PropTypes.string,
  }

  return (
    <div className="box">
      <div className="diplayer__box flex flex-col align-items-center justify-center">
        <div className="diplayer__tag">
          <span className="text-primary">
            {discount}<small>%</small>
          </span>
        </div>
        <div className="text-center">
          <div className="text-secondary text-md ">You will pay 💶</div>
          <div className="sale-price my-2">{formatNumber(salePrice)}</div>
          <div className="text-light text-sm">
            You saved 😍 <span className='pl-2'>{formatNumber(saving)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Displayer
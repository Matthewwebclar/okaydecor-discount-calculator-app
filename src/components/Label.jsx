/* eslint-disable react/prop-types */
const Label = ({ inputFor = '', text, className = '' }) => {
  return (
    <label className={`label ${className}`} htmlFor={inputFor}>{text}:</label>
  )
}

export default Label
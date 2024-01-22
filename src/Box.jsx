/* eslint-disable react/prop-types */
import './Box.css'

/**
 * @typedef {object} BoxProp 
 * @property {string} bgColor
 * @property {number|string} width
 * @property {number|string} height
 * @property {() => void} onRemoveClicked
 * 
 * @param {React.ComponentProps<HTMLDivElement & BoxProp>} props 
 * @returns 
 */
export default function Box({bgColor, width, height, onRemoveClicked}) {
  return <div className="box-wrapper">
    <div 
      className="box" 
      style={{backgroundColor: bgColor, width: width + 'px', height: height + 'px'}}>

      </div>
    <button onClick={() => onRemoveClicked?.()}>X</button>
  </div>
}
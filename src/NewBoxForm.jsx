/* eslint-disable react/prop-types */
import { useState } from "react"
import './NewBoxForm.css';

export default function NewBoxForm({onSubmit}) {
  const [values, setValues] = useState({width: 0, height: 0, bgColor: 'black'})

  return <form onSubmit={(event) => {
    event.preventDefault()
    const isValid = event.currentTarget.reportValidity()
    if (!isValid) return
    onSubmit?.(values)
    setValues({width: 0, height: 0, bgColor: 'black'})
  }}>
    <div className="form-control">
      <label htmlFor="width">Width</label>
      <input id="width" type="number" required min={1} value={values.width} onChange={(e) => setValues({...values, width: e.target.value})} />
    </div>
    <div className="form-control">
      <label htmlFor="height">Height</label>
      <input id="height" type="number"  required min={1} value={values.height} onChange={(e) => setValues({...values, height: e.target.value})}/>
    </div>
    <div className="form-control">
      <label htmlFor="bgColor">Background Color</label>
      <input id="bgColor" type="color" required minLength={1} value={values.bgColor} onChange={(e) => setValues({...values, bgColor: e.target.value})} />
    </div>
    <button type="submit">Add new box</button>
  </form>
}
import NewBoxForm from "./NewBoxForm"
import Box from "./Box"
import { useState } from "react"
import "./BoxList.css";

export default function BoxList() {
  const [boxes, setBoxes] = useState([])

  return <div>
    <h2 style={{textAlign: 'center'}}>New Box Form</h2>
    <NewBoxForm onSubmit={(box) => setBoxes([...boxes, box])}/>
    <h2 style={{textAlign: 'center'}}>List of Boxes</h2>
    <ul className="box-list">
      {boxes.length === 0 && <li style={{fontStyle: 'italic'}}>No boxes yet</li>}
      {boxes.map((box, idx) => (
        <li key={idx} className="box-item">
          <Box
            bgColor={box.bgColor}
            width={box.width}
            height={box.height}
            onRemoveClicked={() => setBoxes(boxes.filter((_, i) => i !== idx))}
          />
        </li>
      ))}
    </ul>
  </div>
}
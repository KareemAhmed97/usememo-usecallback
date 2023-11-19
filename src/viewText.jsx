/* eslint-disable react-refresh/only-export-components */
import React from "react"
import Text from "./Text"

const ViewText = ({text , addAge}) => {
  console.log ("view text")
  return (
    <div style={{border:'red solid 2px', width:"20%", textAlign:"center", padding:"20px"}}>
    <br />
    <button onClick={addAge}> Add Age</button>
    <p>the included text :</p>
      <Text> {text.name}</Text>
      <Text>{text.age}</Text>
  
    </div>
  )
}

export default  React.memo (ViewText)  
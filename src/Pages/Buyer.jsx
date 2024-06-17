import React from 'react'
import { Container } from 'react-bootstrap'
import axios from "axios"

function Buyer() {
async function getdata(){
  try {
    let res = await axios({
      method : "get",
      url : "https://p3d.in/u/Altrous"
    })
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
getdata()


  return (
    <div>
      <h1>Hello Buyer</h1>
      
    </div>
  )
}

export default Buyer

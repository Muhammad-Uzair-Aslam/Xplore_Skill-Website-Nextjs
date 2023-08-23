import React from 'react'

export default function InputField(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} required/>
    </div>
  )
}

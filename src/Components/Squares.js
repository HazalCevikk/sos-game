import React from 'react'
import '../App.css'

const Squares = (props) => {
  return (
    <div className='square' {...props}>{
        props.x ? 'X' : (props.o ? 'O' : '')
    }</div>
  )
}

export default Squares
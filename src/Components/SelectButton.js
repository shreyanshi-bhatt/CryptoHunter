import React from 'react'

const SelectButton = ({children, selected, onClick}) => {
  return (
    <span onClick={onClick} style={
      selected ? {
        backgroundColor: 'gold',
        color: 'black',
        fontWeight: '700'
      } : {
        fontWeight: '500'
      }
    } className='selectbutton'>
      {children}
    </span>
  )
}

export default SelectButton
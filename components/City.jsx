import React from 'react'

const City = ({filter}) => {
  return (
    <>
              {filter?.city?.map((item) => (
              <option value={item.value} className={`border-2 cursor-pointer px-4 py-2 `} key={item.value}>
                {item.name }
                
              </option>
              ))}
    </>      
  )
}

export default City
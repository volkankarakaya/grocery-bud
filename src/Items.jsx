import React from 'react'
import SingleItem from './SingleItem'
import { nanoid } from 'nanoid'

const Items = ({items,removeItem}) => {
  return (
    <div className="items">
        {items.map((item) => {
            return <SingleItem item={item} key={nanoid()} removeItem={removeItem}/>
        })}
    </div>
  )
}

export default Items
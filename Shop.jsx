import React from 'react'
import list from '../list'
import Card from './Card'

const Shop = ({handleClick}) => {
  return (
   <section>
    {list.map((item)=>{
        //console.log(item); or if getting complicated method

        return<Card item={item} key={item.id} handleClick={handleClick}/> // we have this as a prop.
    })}
   </section>
  )
}

export default Shop
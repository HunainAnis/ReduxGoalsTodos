import React from 'react'

export const List = (props) => {
    // console.log(props.items)
    return(
        <ul>
    {props.items.map((item) => (
        <li key={item.id}>
        <span 
            onClick={()=>props.toggle && props.toggle(item)}
            style={{textDecoration:item.complete ? 'line-through' : 'none'}}
        >
            {item.name}
        </span>
        <button onClick={() => props.remove(item)}>
            X
        </button>
        </li>
  ))}
        </ul>
    )
}
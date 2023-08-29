import React from 'react'

export default function Menu({ menuItems, handleAddToOrder }) {
  return (
    <div className="menu-container">
      <ul>
        {menuItems.map((item, index) => (
          <li className="menu-item" key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => handleAddToOrder(item)}>담기</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'

export default function Order({ order, removeItem }) {
  return (
    <>
      <h3>주문 목록</h3>
      {order.map((item, index) => (
        <div key={index}>
          <span className="order-item">{item.name}</span>
          <button onClick={() => removeItem(item)}>빼기</button>
        </div>
      ))}
    </>
  )
}

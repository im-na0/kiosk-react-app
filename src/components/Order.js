import React from 'react'

export default function Order({ order, setOrder, removeItem }) {
  return (
    <>
      <div className="order-header">
        <h3>주문 목록</h3>
        {order.length > 0 ? <button onClick={() => setOrder([])}>목록 비우기</button> : null}
      </div>
      {order.map((item, index) => (
        <div key={index}>
          <span className="order-item">{item.name}</span>
          <button onClick={() => removeItem(item.id)}>빼기</button>
        </div>
      ))}
      <h3>총 결제 금액</h3>
      <div>
        {order.reduce((arr, cur) => {
          return arr + cur.price
        }, 0)}{' '}
        원
      </div>
    </>
  )
}

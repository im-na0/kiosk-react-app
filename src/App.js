import './App.css'
import React, { useState } from 'react'
import { data } from './data/data'
import Category from './components/Category'
import Menu from './components/Menu'
import Order from './components/Order'

// TODO: 성능 개선도 해보기! useMemo 사용
// TODO: 메뉴 선택 리셋
// TODO: 수량 선택 및 관리
// TODO: 중복 선택 시 수량 올라감..
// TODO: 주문목록에서 빼기할 때 같은 메뉴는 한 꺼번에 빼짐.. 주문목록 만들어질 때 고유key값 생성해줘야할듯

function App() {
  const { categories, menuItems } = data
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [order, setOrder] = useState([])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }
  const filteredMenuItems = menuItems[selectedCategory]

  const handleAddToOrder = (item) => {
    setOrder((prev) => [...prev, item])
  }

  const removeItem = (itemToRemove) => {
    setOrder((prev) => prev.filter((prevItem) => prevItem !== itemToRemove))
  }

  return (
    <>
      <div className="main-container">
        <Category categories={categories} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
        <Menu menuItems={filteredMenuItems} handleAddToOrder={handleAddToOrder} />
      </div>
      <div className="order-container">
        <Order order={order} removeItem={removeItem} />
        <h3>총 결제 금액</h3>
        <div>
          {order.reduce((arr, cur) => {
            return arr + cur.price
          }, 0)}{' '}
          원
        </div>
      </div>
    </>
  )
}

export default App

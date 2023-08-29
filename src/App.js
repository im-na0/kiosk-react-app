import './App.css'
import React, { useState } from 'react'
import { data } from './data/data'
import Category from './components/Category'
import Menu from './components/Menu'
import Order from './components/Order'

// TODO: 성능 개선도 해보기! useMemo 사용
// TODO: 수량 선택 및 관리
// TODO: 중복 선택 시 수량 올라감

function App() {
  const { categories, menuItems } = data
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [order, setOrder] = useState([])
  const [uniqueId, setUniqueId] = useState(0)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }
  const filteredMenuItems = menuItems[selectedCategory]

  const handleAddToOrder = (item) => {
    const itemWithUniqueId = { ...item, id: uniqueId }
    setUniqueId(uniqueId + 1)
    console.log(itemWithUniqueId)
    setOrder((prev) => [...prev, itemWithUniqueId])
  }

  const removeItem = (itemId) => {
    setOrder((prev) => prev.filter((prevItem) => prevItem.id !== itemId))
  }

  return (
    <>
      <div className="main-container">
        <Category categories={categories} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
        <Menu menuItems={filteredMenuItems} handleAddToOrder={handleAddToOrder} />
      </div>
      <div className="order-container">
        <Order order={order} setOrder={setOrder} removeItem={removeItem} />
      </div>
    </>
  )
}

export default App

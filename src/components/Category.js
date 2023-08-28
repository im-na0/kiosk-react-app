import React from 'react'

export default function Category({ categories, selectedCategory, handleCategoryClick }) {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} onClick={() => handleCategoryClick(category)} className={selectedCategory === category ? 'selected' : ''}>
          {category}
        </div>
      ))}
    </div>
  )
}

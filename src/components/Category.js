import React from 'react'

export default function Category({ categories, selectedCategory, handleCategoryClick }) {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <span key={index} onClick={() => handleCategoryClick(category)} className={selectedCategory === category ? 'selected' : ''}>
          {category}
        </span>
      ))}
    </div>
  )
}

import React from 'react'
import './WeekCard.css'

const MealCard = ({meal}) => {
  const {meal_name} = meal
  const {weekStart, weekEnd} = meal.week
  const {meal_type_name} = meal.meal_type
  const {week_day_name} = meal.week_day
  return (
    <div className='meals-container'>
     
      <h2>{week_day_name} {meal_type_name}: {meal_name}</h2>
    </div>
  )
}

export default MealCard

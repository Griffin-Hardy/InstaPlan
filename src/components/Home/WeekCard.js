import React from 'react'

const WeekCard = ({meal}) => {
  const { weekDayId, meal_name, mealTypeId} = meal
  const {weekStart, weekEnd} = meal.week
  return (
    <div>
      <h2>{weekStart}</h2>
      <h2>{weekEnd}</h2>
      <h2>{weekDayId}</h2>
      <h2>{mealTypeId}</h2>
      <h2>{meal_name}</h2>
    </div>
  )
}

export default WeekCard
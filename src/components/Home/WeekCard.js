import React from 'react'
import './WeekCard.css'
import MealCard from './MealCard'

const WeekCard = ({week}) => {
  // const {meal_name} = meal
  // const {weekStart, weekEnd} = meal.week
  // const {meal_type_name} = meal.meal_type
  // const {week_day_name} = meal.week_day
  console.log(week)
  const mealsDisplay = week.map((meal) => {
    return <MealCard meal={meal} />;
  });
  return (
    <div className='week-container'>
      <h2 className='date'>Week of: {week[0].week.weekStart} - {week[0].week.weekEnd}</h2>
      {mealsDisplay}
    </div>
  )
}

export default WeekCard
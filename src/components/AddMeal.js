import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import authContext from '../store/AuthContext'

const AddMeal = () => {
  const [mealType, setMealType] = useState([])
  const [weekDay, setWeekDay] = useState([])
  const [selectedWeekDay, setSelectedWeekDay] = useState(null)
  const [selectedMealType, setSelectedMealType] = useState(null)
  const [mealName, setMealName] = useState('')
  const [weekStart, setWeekStart] = useState('')
  const [weekEnd, setWeekEnd] = useState('')
  const authCtx = useContext(authContext)

  useEffect(() => {
    axios.get('/types')
    .then(res => {
      console.log(res.data)
      setMealType(res.data)
      setSelectedMealType(res.data[0].id)
    })
    .catch(err => console.log(err))
  },[])

  useEffect(() => {
    axios.get('/weekdays')
    .then(res => {
      console.log(res.data)
      setWeekDay(res.data)
      setSelectedWeekDay(res.data[0].id)
    })
    .catch(err => console.log(err))
  },[])

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/addmeal', {mealName, selectedMealType, selectedWeekDay,userId: authCtx.userId, weekStart, weekEnd})
      .then(res => console.log(res.data))
  }


  console.log(selectedMealType)
  return (
    <div>
    <from>
      <label>Start of week</label>
      <input type="date" onChange={e => setWeekStart(e.target.value)}></input>
      <label>End of week</label>
      <input type="date" onChange={e => setWeekEnd(e.target.value)}></input>
    </from>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder='Meal name' onChange={e => setMealName(e.target.value)}/>
      <select value={selectedMealType} onChange={e => setSelectedMealType(e.target.value)}>
        {mealType.map(type => {
          return <option value={type.id}>{type.meal_type_name}</option>
        })}
      </select>
      <select value={selectedWeekDay} onChange={e => setSelectedWeekDay(e.target.value)}>
        {weekDay.map(day => {
          return <option value={day.id}>{day.week_day_name}</option>
        })}
      </select>
      <button>submit</button>
    </form>
    </div>
  )
}

export default AddMeal
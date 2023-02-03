import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import authContext from '../store/AuthContext'

const AddMeal = () => {
  const [mealType, setMealType] = useState([])
  const [selectedMealType, setSelectedMealType] = useState(null)
  const [mealName, setMealName] = useState('')
  const authCtx = useContext(authContext)

  useEffect(() => {
    axios.get('/types')
    .then(res => {
      console.log(res.data)
      setMealType(res.data)
    })
    .catch(err => console.log(err))
  },[])

  const handleSubmit = e => {
    e.preventDefault()
    // if(selectedMealType === null || mealName === ''){
    //   alert('please fill out all fields')
    //   return
    // }
    axios.post('/addmeal', {mealName, selectedMealType, userId: authCtx.userId})
      .then(res => console.log(res.data))
  }

  console.log(selectedMealType)
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder='Meal name'/>
      <select onChange={e => setSelectedMealType(e.target.value)}>
        {mealType.map(type => {
          return <option value={type.id}>{type.meal_type_name}</option>
        })}
      </select>
      <button>submit</button>
    </form>
  )
}

export default AddMeal
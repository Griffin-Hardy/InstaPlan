import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../../store/AuthContext'
import WeekCard from './WeekCard'

const Home = () => {
  const [meals, setMeals] = useState([])
  const {userId} = useContext(AuthContext)

  const getAllUserMeals = () => {
    axios.get(`/getmeals/${userId}`)
      .then(res => {
        console.log(res.data)
        setMeals(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUserMeals()
  }, [])

  const mealsDisplay = meals.map(meal => {
    return <WeekCard meal={meal}/>
  }) 

  return (
    <div>Home
      {mealsDisplay}
    </div>
  )
}

export default Home
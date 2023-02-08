import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import WeekCard from "./WeekCard";
import "./Home.css";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const { userId } = useContext(AuthContext);

  const getAllUserMeals = () => {
    axios
      .get(`/getmeals/${userId}`)
      .then((res) => {
        console.log(res.data);
        setMeals(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUserMeals();
  }, []);

  const weeks = meals.reduce((acc, meal) => {
    // console.log(acc, meal.weekId)
    if (acc[meal.week.weekStart + meal.week.weekEnd]) {
      // console.log('hit if')
      acc[meal.week.weekStart + meal.week.weekEnd].push(meal)
    } else {
      // console.log('hit else')
      acc[meal.week.weekStart + meal.week.weekEnd] = [meal]
    }
    return acc
  }, {})

  let mealsDisplay = []
  for(const week in weeks){
    mealsDisplay.push(<WeekCard week={weeks[week]}/>)
  }

  
console.log(meals)
  return (
    <div className="container">
      <div className="meal-container">{mealsDisplay}</div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import authContext from "../store/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddMeal.css";

const AddMeal = () => {
  const [mealType, setMealType] = useState([]);
  const [weekDay, setWeekDay] = useState([]);
  const [selectedWeekDay, setSelectedWeekDay] = useState(null);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [mealName, setMealName] = useState("");
  const [weekStart, setWeekStart] = useState("");
  const [weekEnd, setWeekEnd] = useState("");
  const authCtx = useContext(authContext);

  useEffect(() => {
    axios
      .get("/types")
      .then((res) => {
        console.log(res.data);
        setMealType(res.data);
        setSelectedMealType(res.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/weekdays")
      .then((res) => {
        console.log(res.data);
        setWeekDay(res.data);
        setSelectedWeekDay(res.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  const notify = () =>
    toast.success("Your meal has been added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/addmeal", {
        mealName,
        selectedMealType,
        selectedWeekDay,
        userId: authCtx.userId,
        weekStart,
        weekEnd,
      })
      .then((res) => console.log(res.data), notify());
  };

  console.log(selectedMealType);
  return (
    <div className="container-box">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="form-container">
        <from className="auth-form">
          <h2>Add a meal below!</h2>
          <label>Start of week:</label>
          <input
            type="date"
            onChange={(e) => setWeekStart(e.target.value)}
          ></input>
          <label>End of week:</label>
          <input
            type="date"
            onChange={(e) => setWeekEnd(e.target.value)}
          ></input>
        </from>
        <form onSubmit={(e) => handleSubmit(e)} className="auth-form">
          <input
            placeholder="Meal name"
            onChange={(e) => setMealName(e.target.value)}
          />
          <section className="select-container">
            <select
              placeholder="Select a meal"
              value={selectedMealType}
              onChange={(e) => setSelectedMealType(e.target.value)}
            >
              {mealType.map((type) => {
                return <option value={type.id}>{type.meal_type_name}</option>;
              })}
            </select>
            <select
              placeholder="Select a weekday"
              value={selectedWeekDay}
              onChange={(e) => setSelectedWeekDay(e.target.value)}
            >
              {weekDay.map((day) => {
                return <option value={day.id}>{day.week_day_name}</option>;
              })}
            </select>
          </section>
          <button className="add-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default AddMeal;

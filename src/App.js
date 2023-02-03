import logo from './logo.svg';
import './App.css';
import Auth from './components/Home/Auth';
import Home from './components/Home/Home';
import AddMeal from './components/AddMeal';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<AddMeal/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

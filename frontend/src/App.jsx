import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelList from "./components/HotelList.jsx";

class App extends Component {

  render() {
    return (
       <section>
         <h1>Hello World!</h1>
         <HotelList />
       </section>
    )
  }
}

export default App

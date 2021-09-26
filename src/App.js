
import './App.css';
import './style/style.css'
import React from 'react'
import Ticker from "./Components/Ticker";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  
    }
  }

  render() {
    const { List } = this.state
    return (
      <div className="divbg">
      <div className="bg-img">
         <Ticker />
      </div>
      </div>
    )
  }
}

export default App;



 

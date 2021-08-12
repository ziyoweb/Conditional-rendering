import React, {Component} from 'react';
import Login from './components/Login'
import JoinNow from './components/JoinNow'


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRegistered: false
        }
    
    }
    

    render()
    {
        
        const handleCallback =(e) =>{
            this.setState(
             {
                 isRegistered: e
             })
        }
          return (
              <div>
                  {
                      this.state.isRegistered ? <JoinNow parentCallback = {()=>handleCallback(false)}/>:<Login parentCallback = {()=>handleCallback(true)}/>
                  }
              </div>
          )
    }
}

export default App;
import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn : true
        }
        this.loggedState = this.loggedState.bind(this);
    }
    //Function to print Logged State
    loggedState(){
        let loggedWord;
        if (this.state.isLoggedIn){
            loggedWord = 'In'
            this.state.isLoggedIn = false
        }
        else{
            loggedWord = 'Out'
             this.state.isLoggedIn = true
        }
        return loggedWord;
        
    }
    render(){
        return (
            <div>
                <h1>You are currently logged <span onClick={this.loggedState}>{this.loggedState()}</span></h1>
            </div>
        )
    }
    
    
}

export default App

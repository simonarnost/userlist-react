import React, { Component } from 'react';
import Userlist from './Userlist';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>User List</h1>
                <div>
                    <Userlist />
                </div>
            </div>
        )
    }
}

export default App;
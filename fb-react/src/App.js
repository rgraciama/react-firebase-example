import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';

import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBlDDi3ZLO02j-k9ooHufzwJyZZTq1c9XY",
    authDomain: "pruebas-896b2.firebaseapp.com",
    databaseURL: "https://pruebas-896b2.firebaseio.com",
    projectId: "pruebas-896b2",
    storageBucket: "pruebas-896b2.appspot.com",
    messagingSenderId: "655681440670",
    appId: "1:655681440670:web:081fec96e4a5a413"
};
firebase.initializeApp(config);

class App extends Component {
    constructor() {
        super()
        this.state = {name: 'Raul'}
    }

    componentDidMount() {
        const nameRef = firebase.database().ref().child('name')

        nameRef.on('value', snapshot => {
            this.setState({
                name: snapshot.val()
            })
        })
    }




    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <h1>Hola {this.state.name}</h1>
                </header>
            </div>
        );
    }
}

export default App;

import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {advice: ''};
 
    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            console.log(advice);
            
            this.setState({advice: advice});
            // console.log(response.data.slip.advice);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        // quote
        const{advice} = this.state;
        // get date 
        const current = new Date();
        const time = `${current.getHours()}:${current.getMinutes()}`;
        return (
            
            <div className='app'>
                <div className='card'>
                    <h1>{time}</h1>
                    <h2 class="greeting">{current.getHours()  < 12 ? "Good morning" : "Good evening"}</h2>
                    <h2 className='heading'><q> {advice} </q></h2>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>New  quote</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;
import React, { Component } from 'react'
import Display from './Display';

class Dashboard extends Component {
    state = {
        balls:0,
        strikes:0    
    }
    
    handleBall = () => {
        const { balls } = this.state;
        if( balls < 3){
            console.log('fired');
            this.setState({balls: balls+1})
        }else{
            this.setState({ balls: 0})
        }
    }    
    
    handleHit = () => {
        this.setState ({
            balls: 0,
            strikes: 0
        })
    }

    handleStrike = () => {
        const { strikes, balls } = this.state;
        if(strikes === 3 || balls === 4) {
            this.setState({
                balls: 0,
                strikes: 0
            })
        }else if(strikes < 3){
            this.setState({
                strikes: strikes + 1,
            })
        }
    }

    handleFoul = () => {
        const { strikes } = this.state;
        if(strikes === 2){
            this.setState({
                strikes : 2
            })
        } else {
            this.setState({
                strikes : strikes +1
            })
        }
    }

    render() {
        return (
            <div>
                <Display balls={this.state.balls} strikes={this.state.strikes} />
                <button onClick = {this.handleHit}>hit</button>
                <button data-testid="ball" onClick = {this.handleBall}>ball</button>
                <button onClick = {this.handleStrike}>strikes</button>
                <button onClick = {this.handleFoul}>foul</button>
            </div>
        )
    }
}

export default Dashboard

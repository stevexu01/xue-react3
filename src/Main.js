import React, { Component } from 'react'
import Person from './Person'

class Main extends Component {
    state = {
        loading: true,
        persons: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const resp = await fetch(url);
        const res = await resp.json();
        console.log(res.results);
        this.setState({loading: false, persons: res.results});
    }

    render() {
        return (
            <div>
                <h2>Person</h2>
                {this.state.loading || !this.state.persons ? (
                    <div> Loading... </div>
                ) : (
                <div>{ this.state.persons.map((p,i) => <Person key={i} profile={p}/>) }</div>
                )
                }
                
            </div>
        )
    }
}

export default Main

import React, { Component } from 'react';

const StarWarsContext = React.createContext();
export const StarWarsConsumer = StarWarsContext.Consumer;

class StarWarsProvider extends Component {
    state = { 
        people:[]
    }
    

    getPeople= async()=>{
        const result = await fetch('https://swapi.co/api/people');
        const data = await result.json();
        this.setState({people:data.results})
    }

    componentDidMount(){
        this.getPeople();
    }

    render() { 
        return ( 
            <StarWarsContext.Provider
                value={{
                    people:this.state.people
                }}
            >
                {this.props.children}
            </StarWarsContext.Provider> 
        );
    }
}
 
export default StarWarsProvider;
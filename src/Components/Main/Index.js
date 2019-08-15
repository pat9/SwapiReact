import React, { Component } from 'react';
import Table from './Table';

class Index extends Component {
    
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
            <div className="row">
                <div className="col s12">
                    <Table people={this.state.people}/>
                </div>
            </div> 
        );
    }
}
 
export default Index;
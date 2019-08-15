import React, { Component } from 'react';

class Table extends Component {
    render() { 
        return ( 
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Altura</th>
                        <th>Año de nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.people.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{`${item.height} cm.`}</td>
                                <td>{item.birth_year}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> 
        );
    }
}
 
export default Table;
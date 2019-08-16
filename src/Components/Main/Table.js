import React, { Component } from 'react';
import { StarWarsConsumer } from '../../Providers/StarWarsProvider'

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
                    <StarWarsConsumer>
                        {
                            (value) => {
                                return(
                                    value.people.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{`${item.height} cm.`}</td>
                                            <td>{item.birth_year}</td>
                                        </tr>
                                    ))
                                )
                            }
                        }
                    </StarWarsConsumer>
                </tbody>
            </table> 
        );
    }
}
 
export default Table;
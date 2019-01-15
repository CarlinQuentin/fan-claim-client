import React from 'react';
import { Table, Button, Col } from 'reactstrap';
import './view.css'

const ViewTable = (props) => {
    return(
        <div>
            <hr/>
            <table>
                <tbody className='grid'>
                    {
                        props.items.map((item, id) => {
                            return(
                                <tr key={id} className='card'>
                                    <th> # {item.id}</th>
                                    <td> Item:  {item.itemName}</td>
                                    <td> Price: {item.price}</td>
                                    <td> Details:  {item.details}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewTable;
import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { AuthContext } from '../auth/AuthContext';
import ViewTable from './ViewTable';
import './view.css'

class ViewIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }


    fetchItems = () => {
        fetch('http://localhost:3000/item/find/all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((itemData) => {
            return this.setState({items: itemData})
    })
}

    componentDidMount() {
        this.fetchItems()
    }
     

    render() {
        const items = this.state.items.length >= 1 ?
        <ViewTable items={this.state.items}/> :

        <h4>No items found :/</h4>

        return(
            <Container>
                <Row>
                    <Col md='12'>
                        {items}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
    {auth => <ViewIndex {...props} auth={auth} />}
    </AuthContext.Consumer>
)
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems, addToCart, removeFromCart } from '../actions';
import { Card, CardTitle, Col, Row, Button, Modal } from 'react-materialize'
import Header from './Header'
import Reserve from './Reserve'

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    renderItems() {
        return _.map(this.props.items, item => {
            return (
                <Col s={4} key={item.id}>
                    <Card header={<CardTitle style={{ height: 350 }} reveal image={item.img_url} waves='light' />}
                        title={item.item_name}
                        reveal={<h4>{item.item_description}</h4>}>
                        <h5>{`$${item.item_price} / ${item.duration}`}</h5>
                        <br />
                        {/* <Button className="blue-grey darken-2" onClick={() => this.props.addToCart(item)}>Save Item</Button> */}
                        {/* <Button className="blue-grey darken-2" onClick={() => this.props.addToCart(item)}>Remove Item</Button> */}
                        {
                            Object.keys(this.props.cart).includes((item.id).toString()) ?
                                <Button
                                    className="blue-grey"
                                    onClick={() => this.props.removeFromCart(item.id)}>
                                    Remove Item
                                </Button> :
                                <Button
                                    className="blue-grey darken-2"
                                    onClick={() => this.props.addToCart(item)}>
                                    Save Item
                                </Button>
                        }

                        <br />
                        <br />
                        <Reserve />
                    </Card>
                </Col>
            );
        });
    }

    render() {
        return (
            <div>
                {this.props.match ? <Header /> : null }
                <div className="blue-grey lighten-3" >
                    <Row>
                        {this.renderItems()}
                    </Row>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { fetchItems, addToCart, removeFromCart })(ItemList)

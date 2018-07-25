import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchItems, addToCart, removeFromCart, deleteItem } from '../actions';
import { Card, CardTitle, Col, Row, Button, Modal } from 'react-materialize'
import { Link } from 'react-router-dom';
import Header from './Header'
import Reserve from './Reserve'

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    onDeleteClick(id) {
        this.props.deleteItem(id, () => {
            this.props.history.push('/user');
        });
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
                        <Link to={`/edit/${item.id}`}>
                            <Button
                                className="blue-grey darken-2">
                                Edit Item
                            </Button>
                        </Link>
                        <br />
                        <br />
                        <Button
                            className="blue-grey darken-2"
                            onClick={() => this.onDeleteClick(item.id)}>
                            Delete Item
                        </Button>
                        

                        
                    </Card>
                </Col>
            );
        });
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps, { fetchItems, addToCart, removeFromCart, deleteItem })(ItemList)

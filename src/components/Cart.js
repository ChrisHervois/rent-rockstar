import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import _ from 'lodash'


class Cart extends Component {
    showItems() {
        return _.map(this.props.items, item => {
            return (
                <div>
                    <Link to="/reserve">
                        <h5> { item.item_name } </h5>
                    </Link>
                </div>
            )
        })
    }
    
    

    render() {
        return (
            <div>
                { this.showItems() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.cart
    }
}

export default connect(mapStateToProps)(Cart)
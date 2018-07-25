import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem, editItem, deleteItem } from '../actions';
import { Input, Row, Button, Icon, Col } from 'react-materialize';
import '../style/style.css';

class ItemForm extends Component {
    renderField(field) {
        return (
            <Row>
                <Col s={3}></Col>
                <Input
                    s={6}
                    label={field.label}
                    {...field.input}
                />
                <Col s={3}></Col>
            </Row>
        )
    }

    onSubmit(values) {
        const { path } = this.props.match;
        const { id } = this.props.match.params;
        if (path === '/edit/:id') {
            this.props.editItem(values, id, () => {
                this.props.history.push('/user');
            })
        } else {
            this.props.addItem(values, () => {
                this.props.history.push('/user');
            })
        }

    }

    


    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="center" style={{marginTop: "100px"}} >
                <Link to="/user" > <Button>My Items</Button> </Link>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Item Name"
                        name="item_name"
                        component={this.renderField}
                    />
                    <Field
                        label="Item Description"
                        name="item_description"
                        component={this.renderField}
                    />
                    <Field
                        label="Item Price"
                        name="item_price"
                        component={this.renderField}
                    />
                    <Field
                        label="Duration"
                        name="duration"
                        component={this.renderField}
                    />
                    <Field
                        label="Add Image"
                        name="img_url"
                        component={this.renderField}
                    />
                    <Button
                        className="blue-grey"
                        type="submit">
                        submit
                    <Icon left>add</Icon>
                    </Button>
                </form>



                
                
            </div>

        )
    }
}

export default reduxForm({
    form: 'NewItemForm'
})(
    connect(null, { addItem, editItem, deleteItem })(ItemForm)
);
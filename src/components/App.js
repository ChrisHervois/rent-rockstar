import React, { Component } from 'react';
import { Parallax, Button, Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="section blue-grey lighten-4">
          <div className="row container">
            <Row>
              <Col>
                <img
                  src="https://s3.amazonaws.com/q2insuranceproject/rent_rockstar.png"
                  height="200"
                  width="500"
                />
              </Col>
              <Col>
                <h3 className="header">Browse</h3>
                <h3 className="header">Rent</h3>
                <h3 className="header">Relax</h3>
              </Col>
            </Row>




          </div>
        </div>
        <Parallax imageSrc="http://s-t.jp/guitar/wp-content/uploads/2017/02/g2.jpg" />
        <div className="section blue-grey lighten-4">
          <div className="row container">
            <h2 className="header">Find what you need</h2>
            <Link to="/browse">
              <Button className="blue-grey darken-2">Browse Items</Button>
            </Link>
          </div>
        </div>
        <Parallax imageSrc="https://3hack.net/wp-content/uploads/2017/09/camping_equipment.jpg" />
        <div className="section blue-grey lighten-4">
          <div className="row container">
            <h2 className="header">Make some extra cash</h2>
            <Link to="/login">
              <Button className="blue-grey darken-2">List Item</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

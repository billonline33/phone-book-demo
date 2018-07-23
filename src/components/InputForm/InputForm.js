import React from 'react'
import './InputForm.css'
import {Col, Row, Grid, Button} from 'react-bootstrap'

class InputForm extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {

    return (
      <div className={'employee-form-outer-container'}>
        <Grid fluid>
          <Row>
            <Col xs={12} className={'col'}>
              <div className={'input-control'}>
                <p>First name</p>
                <p><input type={'text'}/></p>

              </div>
              <div className={'input-control'}>
                <p>Last name</p>
                <p><input type={'text'}/></p>
              </div>
              <div className={'input-control'}>
                <p>Phone number</p>
                <p><input type={'text'}/></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={'col controls-container'}>
              <Button bsStyle={'link'}> Save</Button>
              <Button bsStyle={'link'}> Cancel</Button>
            </Col>
          </Row>
        </Grid>

      </div>
    )

  }
}

export default InputForm
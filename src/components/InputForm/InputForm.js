import React from 'react'
import './InputForm.css'
import {Col, Row, Grid, Button} from 'react-bootstrap'

class InputForm extends React.Component {
  constructor(props) {
    super(props)
    this.onFirstNameInputChange = this.onFirstNameInputChange.bind(this)
    this.onLastNameInputChange = this.onLastNameInputChange.bind(this)
    this.onPhoneNumberInputChange = this.onPhoneNumberInputChange.bind(this)

    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      phoneNumberInput: ''
    }

  }
  onFirstNameInputChange(e) {
    this.setState({firstNameInput: e.target.value})
  }
  onLastNameInputChange(e) {
    this.setState({lastNameInput: e.target.value})
  }
  onPhoneNumberInputChange(e) {
    this.setState({phoneNumberInput: e.target.value})
  }


  render() {
    const onSaveClicked = () => {
      this.props.onClickSave({
        firstName: this.state.firstNameInput,
        lastName: this.state.lastNameInput,
        phoneNumber: this.state.phoneNumberInput
      })
    }
    return (
      <div className={'employee-form-outer-container'}>
        <Grid fluid>
          <Row>
            <Col xs={12} className={'col'}>
              <div className={'input-control'}>
                <p>First name</p>
                <p><input type={'text'} value={this.state.firstNameInput} onChange={this.onFirstNameInputChange}/></p>

              </div>
              <div className={'input-control'}>
                <p>Last name</p>
                <p><input type={'text'} value={this.state.lastNameInput} onChange={this.onLastNameInputChange}/></p>
              </div>
              <div className={'input-control'}>
                <p>Phone number</p>
                <p><input type={'text'} value={this.state.phoneNumberInput} onChange={this.onPhoneNumberInputChange}/></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={'col controls-container'}>
              <Button bsStyle={'link'} onClick={onSaveClicked}> Save</Button>
              <Button bsStyle={'link'}> Cancel</Button>
            </Col>
          </Row>
        </Grid>

      </div>
    )

  }
}

export default InputForm
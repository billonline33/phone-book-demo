import React from "react";
import "./InputForm.css";
import { Col, Row, Grid, Button } from "react-bootstrap";

class InputForm extends React.Component {
  render() {
    return (
      <div className={"employee-form-outer-container"}>
        <Grid fluid>
          <Row>
            <Col xs={12} className={"col"}>
              <div className={"input-control"}>
                <p>First name</p>
                <p>
                  <input
                    type={"text"}
                    value={this.props.firstName}
                    onChange={this.props.onFirstNameInputChange}
                  />
                </p>
              </div>
              <div className={"input-control"}>
                <p>Last name</p>
                <p>
                  <input
                    type={"text"}
                    value={this.props.lastName}
                    onChange={this.props.onLastNameInputChange}
                  />
                </p>
              </div>
              <div className={"input-control"}>
                <p>Phone number</p>
                <p>
                  <input
                    type={"text"}
                    value={this.props.phoneNumber}
                    onChange={this.props.onPhoneNumberInputChange}
                  />
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={"col controls-container"}>
              <Button bsStyle={"link"} onClick={this.props.onClickSave}>
                {" "}
                Save
              </Button>
              <Button bsStyle={"link"} onClick={this.props.onClickCancel}>
                {" "}
                Cancel
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default InputForm;

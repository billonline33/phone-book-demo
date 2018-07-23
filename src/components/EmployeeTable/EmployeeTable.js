import React from "react";
import { Grid, Row, Col, Button, Table } from "react-bootstrap";
import "./EmployeeTable.css";

class EmployeeTable extends React.Component {
  render() {
    return (
      <div className={"employee-table-outer-container"}>
        <Grid>
          <Row>
            <Col xs={12} className={"col"}>
              <div className={"filter-container"}>
                <span> Filter </span>
                <input type={"text"} />
              </div>
              <Table bordered condensed hover className={"employee-table"}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone number</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.employeeList.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.phoneNumber}</td>
                        <td>
                          <Button
                            bsStyle={"link"}
                            onClick={() =>
                              this.props.onEditEmployeeClick(item.id)
                            }
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default EmployeeTable;

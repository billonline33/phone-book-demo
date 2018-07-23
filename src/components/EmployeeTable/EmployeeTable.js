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
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <Button bsStyle={"link"}>Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <Button bsStyle={"link"}>Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <Button bsStyle={"link"}>Edit</Button>
                    </td>
                  </tr>
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

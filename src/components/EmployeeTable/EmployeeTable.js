import React from 'react';
import { Grid, Row, Col, Button, Table, Glyphicon } from 'react-bootstrap';
import './EmployeeTable.css';

class EmployeeTable extends React.Component {
  render() {
    const getSortIcon = curSetting => {
      if (curSetting === null) {
        return <Glyphicon glyph="sort" />;
      } else if (curSetting === 'ASC') {
        return <Glyphicon glyph="arrow-down" />;
      } else {
        return <Glyphicon glyph="arrow-up" />;
      }
    };
    return (
      <div className={'employee-table-outer-container'}>
        <Grid>
          <Row>
            <Col xs={12} className={'col'}>
              <div className={'filter-container'}>
                <span> Filter </span>
                <input
                  type={'text'}
                  value={this.props.filter}
                  onChange={this.props.onFilterInputChange}
                />
              </div>
              <Table bordered condensed hover className={'employee-table'}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th onClick={this.props.onClickSortFN}>
                      <div className={'col-heading'}>First Name </div>
                      <div className={'sort-icon'}>
                        {getSortIcon(this.props.sortFN)}
                      </div>
                    </th>
                    <th onClick={this.props.onClickSortLN}>
                      <div className={'col-heading'}>Last Name </div>
                      <div className={'sort-icon'}>
                        {getSortIcon(this.props.sortLN)}
                      </div>
                    </th>
                    <th onClick={this.props.onClickSortPN}>
                      <div className={'col-heading'}>Phone number </div>
                      <div className={'sort-icon'}>
                        {getSortIcon(this.props.sortPN)}
                      </div>
                    </th>
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
                            bsStyle={'link'}
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

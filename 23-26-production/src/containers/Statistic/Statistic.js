import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { Line, Column, Table } from '../../components';

@connect(
  state => ({ statistic: state.async.statistic })
)
class Statistic extends Component { // eslint-disable-line
  render() {
    const styles = require('./Statistic.scss');
    return (
      <div className={styles.statistic}>
        <Helmet title="统计"/>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Line {...this.props}/>
            </Col>
            <Col xs={12} md={6}>
              <Column {...this.props}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Table {...this.props}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Statistic;

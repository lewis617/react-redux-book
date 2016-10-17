import React, { Component, PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';

export default class CustomPagerComponent extends Component {
  static propTypes = {
    setPage: PropTypes.any,
    currentPage: PropTypes.any,
    previous: PropTypes.any,
    next: PropTypes.any,
    maxPage: PropTypes.any
  };
  static defaultProps = {
    maxPage: 0,
    currentPage: 0
  };

  handleSelect = (eventKey) => {
    this.props.setPage(eventKey - 1);
  };

  render() {
    return (
      <div className="pull-right">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={this.props.maxPage}
          maxButtons={5}
          activePage={this.props.currentPage + 1}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

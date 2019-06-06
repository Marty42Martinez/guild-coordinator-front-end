import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GatherEvents extends PureComponent {
  static propTypes = {

  }

  componentDidMount() {

  }

  render() {

    return (
      <h1>Looks like we have made it</h1>
    );
  }
}


export default withRouter(connect(
  null,
  null
)(GatherEvents));

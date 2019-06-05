import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GatherGuilds extends PureComponent {
  static propTypes = {

  }

  render() {

    return (
      <section>
        <h2>Words and more Words</h2>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  //selectors!
  list: [],
  loading: '',
  error: ''
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchGuilds());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GatherGuilds);

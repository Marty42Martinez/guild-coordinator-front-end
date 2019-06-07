import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventList from '../../components/events/EventList';

class GatherEvents extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { events, loading, error } = this.props;

    if(loading) return <h1>LOADING!</h1>;
    if(error) return <h1>Status: {error.status}: {error.message}</h1>
    return (
      <>
        <h1>Looks like we have made it</h1>
        <EventList events={events} />
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  _id: props.match.params.id,
  //Selectors!
  events: '',
  loading: '',
  error: ''
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchEventsByGuild(props.match.params.id));
  }
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GatherEvents));

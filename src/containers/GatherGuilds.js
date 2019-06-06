import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGuildList, getGuildLoading, getGuildError } from '../selectors/guildSelectors';
import { fetchGuildList, postGuild } from '../actions/guilds/guildActions';
import GuildList from '../components/guilds/GuildList';
import GuildForm from '../components/guilds/GuildForm';


class GatherGuilds extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }


  render() {
    const { list, loading, onSubmit } = this.props;

    if(loading) return <h1>Loading!</h1>;

    return (
      <section>
        <GuildList guilds={list} />
        <GuildForm onSubmit={onSubmit} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  list: getGuildList(state),
  loading: getGuildLoading(state),
  error: getGuildError
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchGuildList());
  },
  onSubmit(name, image, game) {
    dispatch(postGuild(name, image, game));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GatherGuilds);

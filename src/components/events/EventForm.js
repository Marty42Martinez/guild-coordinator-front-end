import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class EventForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    guild: PropTypes.string.isRequired
  }

  state = {
    name: '',
    description: '',
    date: '',
    time: ''
  }
  
  handleSubmit = event => {
    event.preventDefault();

    const { name, description, date, time } = this.state;
    const { guild } = this.props;
    this.props.onSubmit(name, description, date, time, guild);
    this.setState({ name: '', description: '', date: '', time: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {
    const { name, description, date, time } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Event Title
          <input type="text" name="title" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Event Description
          <textarea name="description" value={description} onChange={this.handleChange}/>
        </label>
        <label>
          Date
          <input type="date" name="date" value={date} onChange={this.handleChange} />
        </label>
        <label>
          Event Time
          <input type="time" name="time" value={time} onChange={this.handleChange} />
        </label>
        <button>Create Event</button>
      </form>
    );
  }
}

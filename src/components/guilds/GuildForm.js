import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class GuildForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    name: '',
    image: '',
    game: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { name, image, game } = this.state;
    this.props.onSubmit(name, image, game);
    this.setState({ name: '', image: '', game: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Guild Name
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Guild Image URL
          <input type="text" name="image" value={image} onChange={this.handleChange} />
        </label>
        <label>
          Choose a Game
          <select name="game" onChange={this.handleChange}>
            <option value="">--Please select an option--</option>
            <option value="World Of Warcraft">World of Warcraft</option>
            <option value="Dungeons And Dragons">Dungeons &amp; Dragons</option>
          </select>
        </label>
        <button>Form a Guild</button>
      </form>
    );
  }
}

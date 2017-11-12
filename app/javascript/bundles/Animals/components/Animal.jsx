import PropTypes from 'prop-types';
import React from 'react';
import player from '../Player'

export default class Animal extends React.Component {
  static propTypes = {
    animal: PropTypes.object.isRequired, // this is passed from the Rails view
    loadImages: propTypes.func.isRequired
  };

  render() {
    const animal = this.props.animal;

    console.log(this.props);
    return (
      <figure className="animal" onDoubleClick={ (event) => {player.play(animal.sound)} }>
        <div className="background" style={{backgroundImage: `url(${animal.image})`}}/>
        <figcaption style={{backgroundColor: animal.bg_colour}}>
          <h2>{animal.name}</h2>
          <img src={animal.icon} alt={animal.name} className='animal-icon'/>
        </figcaption>
      </figure>
    );
  }
}

import PropTypes from 'prop-types';
import React from 'react';
import player from '../Player'

export default class Animal extends React.Component {
  static propTypes = {
    animal: PropTypes.object.isRequired, // this is passed from the Rails view
    loadImages: PropTypes.func.isRequired
  };

  render() {
    const {animal, loadImages} = this.props;

    console.log(this.props);
    return (
      <figure className="animal" onClick={ (event) => {loadImages(animal)} } onDoubleClick={ (event) => {player.play(animal.sound)} }>
        <div className="background" style={{backgroundImage: `url(${animal.image})`}}/>
        <figcaption style={{backgroundColor: animal.bg_colour}}>
          <h2>{animal.name}</h2>
          <img src={animal.icon} alt={animal.name} className='animal-icon'/>
        </figcaption>
      </figure>
    );
  }
}

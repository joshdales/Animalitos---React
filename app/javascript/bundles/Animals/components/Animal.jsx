import PropTypes from 'prop-types';
import React from 'react';

export default class Animal extends React.Component {
  static propTypes = {
    animal: PropTypes.obj.isRequired, // this is passed from the Rails view
  };

  render() {
    console.log(this.props);
    return (
      <figure className="animal">
        <div className="background" style={{backgroundImage: `url(${animal.image})`}}/>
        <figcaption style={{backgroundColor: animal.bg_colour}}>
          <h2>{animal.name}</h2>
          <img src={animal.icon} alt={animal.name} className='animal-icon'/>
        </figcaption>
      </figure>
    );
  }
}

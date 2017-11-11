import PropTypes from 'prop-types';
import React from 'react';

export default class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    console.log(this.props);
    return (
      <section className="animals">
        {this.props.animals.map((animal) => (
          <figure className="animal">
            <div className="background" style={{backgroundImage: `url(${animal.image})`}}/>
            <figcaption style={{backgroundColor: animal.bg_colour}}>
              <h2>{animal.name}</h2>
              <img src={animal.icon} alt={animal.name} className='animal-icon'/>
            </figcaption>
          </figure>
        ))}
      </section>
    );
  }
}

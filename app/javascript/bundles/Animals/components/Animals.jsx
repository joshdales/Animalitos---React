import PropTypes from 'prop-types';
import React from 'react';
import Animal from './Animal';
import player from '../Player'

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
        {this.props.animals.map( animal => <Animal key={animal.id} animal={animal}/> )}
      </section>

      <Album />

    );
  }
}

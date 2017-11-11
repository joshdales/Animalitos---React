import PropTypes from 'prop-types';
import React from 'react';
import Animal from './Animal';
import player from '../Player';
import Album from './Album';

export default class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = {
      images: [].
      active: false
    };
  }

  render() {
    const {animals} = this.props;
    const {images, active} = this.props;

    return (
      <div>
        <section className="animals">
          {animals.map( animal => <Animal key={animal.id} animal={animal}/> )}
        </section>

        <Album images={images} active={active}/>
      </div>
    );
  }
}

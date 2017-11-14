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
      images: [],
      active: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        this.setState({
          images: [],
          active: false
        })
      }
    })
  }

  loadImages = (animal) => {
    const client = //api key goes here

    fetch(`https://api.unsplash.com/search/photos?client_id=${client}&query=${animal.name}`).
      then(response => response.json()).
        then(data => {
          this.setState({
            active: true,
            images: data.results
      });
    });
  }


  render() {
    const {animals} = this.props;
    const {images, active} = this.state;

    return (
      <div>
        <section className="animals">
          {animals.map( animal => <Animal key={animal.id} animal={animal} loadImages={this.loadImages}/> )}
        </section>

        <Album images={images} active={active}/>
      </div>
    );
  }
}

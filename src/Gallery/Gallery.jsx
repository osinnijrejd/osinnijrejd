import React from 'react';
import PointsImage from './points.jpg'

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <img src={ PointsImage } />
      </div>
    );
  }
}

export default Gallery;

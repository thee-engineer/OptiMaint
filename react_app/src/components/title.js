import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="title">
      <Link to="/map" className="btn btn-primary pull-xs-right map-button">Map</Link>
      <h1>OptiMaint</h1>
    </div>
  );
}

export default Title;
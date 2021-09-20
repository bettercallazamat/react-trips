import React from 'react';
import PropTypes from 'prop-types';

const TripsList = ({ trips }) => (
  <div className="CocktailsList">
    {
        trips.map((trip) => (
          <p key={trip.id}>{ trip.title }</p>
        ))
      }
  </div>
);

TripsList.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TripsList;

import React from 'react';
import Star from './Star';
import shortid from 'shortid';

function Stars({ count }) {
  const starsId = [];

  for (let i = 0; i < count; i++) {
    starsId.push({ id: shortid.generate() });
  }

  const stars = starsId.map((star) => <Star key={star.id} />);

  return (
    count >= 1 &&
    count <= 5 &&
    typeof count === 'number' &&
    <ul className='card-body-stars'>{stars}</ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;

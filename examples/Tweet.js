import React from 'react';
import { createPropType } from './../lib/custom-proptypes';

const Tweet = props => (
  <div>{props.text}</div>
);

Tweet.propTypes = {
  text: createPropType(
    prop => prop.length < 140
  ).isRequired
};

export default Tweet;

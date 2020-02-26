import React, { Component } from 'react';
const generation = { id: 1, expiration: '2025-10-10' };
class Generation extends Component {
  state = {};

  render() {
    return (
      <div>
        <h3>Generation with ID: {generation.id}</h3>
        <h4>expires at {new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

export default Generation;

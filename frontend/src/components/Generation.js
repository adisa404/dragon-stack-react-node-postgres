import React, { Component } from 'react';

class Generation extends Component {
  state = { generation: { id: 1, expiration: '2025-10-10' } };

  fetchGeneration() {
    fetch('http://localhost:3003/generation').then(response =>
      console.log('response', response),
    );
  }

  componentDidMount() {
    this.fetchGeneration();
  }
  render() {
    return (
      <div>
        <h3>Generation with ID: {this.state.generation.id}</h3>
        <h4>
          expires at {new Date(this.state.generation.expiration).toString()}
        </h4>
      </div>
    );
  }
}

export default Generation;

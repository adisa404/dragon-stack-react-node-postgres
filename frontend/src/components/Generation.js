import React, { Component } from 'react';

class Generation extends Component {
  state = { generation: { id: 1, expiration: '2025-10-10' } };

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

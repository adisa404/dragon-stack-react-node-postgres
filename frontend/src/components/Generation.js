import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };

class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };

  fetchGeneration = () => {
    fetch('http://localhost:3003/generation')
      .then(response => response.json())
      .then(json => this.setState({ generation: json.generation }))
      .catch(error => console.log(error));
  };

  fetchNextGeneration = () => {
    this.fetchGeneration();

    setTimeout(() => this.fetchNextGeneration(), 1000);
  };

  componentDidMount() {
    this.fetchGeneration();
  }
  render() {
    return (
      <div>
        <h3>Generation with ID: {this.state.generation.generationId}</h3>
        <h4>
          expires at {new Date(this.state.generation.expiration).toString()}
        </h4>
      </div>
    );
  }
}

export default Generation;

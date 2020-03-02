import React, { Component } from 'react';
import { connect } from 'react-redux';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const MINIMUM_DELAY = 3000;

class Generation extends Component {
  state = { generation: DEFAULT_GENERATION };

  timer = null;

  fetchGeneration = () => {
    fetch('http://localhost:3003/generation')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ generation: json.generation });
      })
      .catch(error => console.log(error));
  };

  fetchNextGeneration = () => {
    this.fetchGeneration();

    let delay =
      new Date(this.state.generation.expiration).getTime() -
      new Date().getTime(); // in ms

    if (delay < MINIMUM_DELAY) delay = MINIMUM_DELAY;
    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    console.log('this.props', this.props);

    //const { generation } = this.props;
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

const mapStateToProps = state => {
  const generation = state.generation;

  return generation;
};
const componentConnector = connect(mapStateToProps);
export default componentConnector(Generation);

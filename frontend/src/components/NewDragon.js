import React, { Component } from 'react';

class NewDragon extends Component {
  state = {};

  fetchNewDragon = () => {
    fetch('http://localhost:3003/dragon/new')
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.fetchNewDragon();
  }

  render() {
    return <div>test</div>;
  }
}

export default NewDragon;

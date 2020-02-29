import React, { Component } from 'react';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  birthDate: '',
  traits: [],
  nickname: 'nickname',
};
class NewDragon extends Component {
  state = { dragon: DEFAULT_DRAGON };

  fetchNewDragon = () => {
    fetch('http://localhost:3003/dragon/new')
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        console.log('json.dragon', json.dragon);
        this.setState({ dragon: json.dragon });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.fetchNewDragon();
    console.log('traits', this.state.dragon.traits);
  }

  render() {
    const {
      dragonId,
      nickname,
      birthDate,
      generationId,
      traits,
    } = this.state.dragon;

    console.log('traits in render', traits);
    return (
      <div>
        <p>{dragonId}</p>
        <p>{nickname}</p>
        <p>{birthDate}</p>
        {this.state.dragon.traits.map(trait => trait.traitValue).join(', ')}
        <p>{generationId}</p>
      </div>
    );
  }
}

export default NewDragon;

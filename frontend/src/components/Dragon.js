import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  birthDate: '',
  traits: [],
  nickname: 'nickname',
};

class Dragon extends Component {
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
    return (
      <div>
        <Button onClick={this.fetchNewDragon}>New Dragon</Button>
        <DragonAvatar dragon={this.state.dragon} />
      </div>
    );
  }
}

export default Dragon;

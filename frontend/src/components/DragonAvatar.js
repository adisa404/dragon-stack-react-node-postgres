import React, { Component } from 'react';

class DragonAvatar extends Component {
  state = {};
  render() {
    const {
      dragonId,
      nickname,
      birthDate,
      generationId,
      traits,
    } = this.props.dragon;

    return (
      <div>
        <p>{dragonId}</p>
        <p>{nickname}</p>
        <p>{birthDate}</p>
        {traits.map(trait => trait.traitValue).join(', ')}
        <p>{generationId}</p>
      </div>
    );
  }
}

export default DragonAvatar;

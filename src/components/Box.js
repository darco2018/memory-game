import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const boxState = {
  FACE_UP: 0,
  FACE_DOWN: 1,
  MATCHING: 2
};

export class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      color: null,
      boxState: null
    };
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    /*  id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    boxState: PropTypes.number.isRequired, */
    box: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  onClick = e => {
    //console.log(e.target.id);
    this.props.handleClick(Number(e.target.id));
  };

  render() {
    const { id, color, boxState } = this.props.box;
    
    console.log( id + color + boxState);    

    const style = {
      display: 'inline-block',
      width: '190px',
      height: '190px',
      background: boxState === 1 ? 'grey' : color ,
      border: '1px solid black'
    };
    return (
      <div id={id} onClick={this.onClick} style={style}>
      </div>
    );
  }
}

export default Box;

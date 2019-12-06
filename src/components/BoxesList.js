import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import {status} from '../App'

export class BoxesList extends Component {
  static propTypes = {
    boxes: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {   

    return (
      <div>
        {this.props.boxes.map((box, i) => (
          <Box
            key={box.id}
            id={box.id}
            color={box.color}
            showColor={box.boxState ===  status.FACE_DOWN ? false : true}
            handleClick={this.props.handleClick}
          />
        ))}
            </div>      
    );
  }
}

export default BoxesList;

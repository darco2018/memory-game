import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

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
            box={{ ...box }}
            handleClick={this.props.handleClick}
          />
        ))}
            </div>
      /*  <div>
        {Array(16)
          .fill(null)
          .map((box, i) => (
            <Box key={i} box={box} handleClick={this.props.handleClick}/>
          ))}
      </div> */
    );
  }
}

export default BoxesList;

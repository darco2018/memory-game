import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Box extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    showColor: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  onClick = e => {
    this.props.handleClick(Number(e.target.id));
  };

  render() {
    let style = {
        display: 'inline-block',
        height: '150px',
        minWidth: '100px',
        width: '10%',
        border: '6px solid black',
        margin: '10px',
        borderRadius: '25px'
      };
      
    const { id, color, showColor } = this.props;
    style.background = showColor ? color : 'grey';

    return <div id={id} onClick={this.onClick} style={style}></div>;
  }
}

export default Box;

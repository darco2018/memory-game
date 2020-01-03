import React from 'react';
import PropTypes from 'prop-types';



const Box = ({ id, color, showColor, handleClick } ) => {
  
  const onClick = e => {
    handleClick(Number(e.target.id));
  };

  let style = {
    display: 'inline-block',
    height: '150px',
    minWidth: '100px',
    width: '10%',
    border: '6px solid black',
    margin: '10px',
    borderRadius: '25px'
  };
 
    style.background = showColor ? color : 'grey';

  return(        
     <div id={id} onClick={onClick} style={style}></div>
  )
}

Box.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  showColor: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Box;

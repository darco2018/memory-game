import React from 'react';
import BoxesList from './components/BoxesList';
import './App.css';
import Navbar from './components/Navbar'
//import { status } from './components/Box';

//const NO_OF_COLORS = 8;

export const status = {
  FACE_UP: 0,
  FACE_DOWN: 1,
  MATCHING: 2
};

class App extends React.Component {
  constructor(props) {
    super(props);

    let boxes = [
      { id: 0, boxState: status.FACE_DOWN, color: 'blue' },
      { id: 1, boxState: status.FACE_DOWN, color: 'aqua' },
      { id: 2, boxState: status.FACE_DOWN, color: 'yellow' },
      { id: 3, boxState: status.FACE_DOWN, color: 'pink' },
      { id: 4, boxState: status.FACE_DOWN, color: 'purple' },
      { id: 5, boxState: status.FACE_DOWN, color: 'red' },
      { id: 6, boxState: status.FACE_DOWN, color: 'brown' },
      { id: 7, boxState: status.FACE_DOWN, color: 'coral' },
      { id: 8, boxState: status.FACE_DOWN, color: 'yellow' },
      { id: 9, boxState: status.FACE_DOWN, color: 'blue' },
      { id: 10, boxState: status.FACE_DOWN, color: 'pink' },
      { id: 11, boxState: status.FACE_DOWN, color: 'aqua' },
      { id: 12, boxState: status.FACE_DOWN, color: 'purple' },
      { id: 13, boxState: status.FACE_DOWN, color: 'brown' },
      { id: 14, boxState: status.FACE_DOWN, color: 'coral' },
      { id: 15, boxState: status.FACE_DOWN, color: 'red' }
    ]

    boxes = this.shuffleBoxes(boxes);

    this.state = {
      boxes,
      previousId: -1
    };
  }

  handleClick = id => {
    const currentBoxCopy = { ...this.state.boxes[id] };
    const previousBoxCopy =
      this.state.previousId === -1
        ? { id: -1, boxState: status.FACE_DOWN, color: '' } // set dummy box on first click
        : { ...this.state.boxes[this.state.previousId] };

    let newPreviousID = null;
    if (previousBoxCopy.color === currentBoxCopy.color) {
      previousBoxCopy.boxState = status.MATCHING;
      currentBoxCopy.boxState = status.MATCHING;
      newPreviousID = -1;
    } else {
      previousBoxCopy.boxState = status.FACE_DOWN;
      currentBoxCopy.boxState = status.FACE_UP;
      newPreviousID = id;
    }

    let boxesCopy = [...this.state.boxes];
    boxesCopy[this.state.previousId] = previousBoxCopy;
    boxesCopy[id] = currentBoxCopy;

    this.setState((prevState, props) => {
      return {
        boxes: boxesCopy,
        previousId: newPreviousID
      };
    });
  };

  shuffleBoxes(boxes) {
    let shuffledBoxes = this.shuffleArr(boxes);
    return shuffledBoxes.map((box, i) => {
      return Object.assign({}, { ...box }, { id: i, boxState: status.FACE_DOWN });
    });     
  }

  resetGame = () => {
    this.setState({
      boxes: this.shuffleBoxes(this.state.boxes),
      previousId: -1
    });
  };

  shuffleArr = arr => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  render() {
    return (
      <div className="constainer">
       <Navbar resetGame={this.resetGame}/>
        <BoxesList boxes={this.state.boxes} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;

/* App.defaultProps = {
  
  allColors: [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'Darkorange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen'
  ]
};
 */
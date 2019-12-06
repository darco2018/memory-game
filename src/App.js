import React from 'react';
import BoxesList from './components/BoxesList';
import './App.css';
import { boxState } from './components/Box';

const NO_OF_COLORS = 8;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: this.props.boxes,
      guessedPairs: 0,
      previousId: -1
    };
  }

  handleClick = id => {
    const currentCopy = { ...this.state.boxes[id] };
    const previousCopy =
      this.state.previousId === -1
        ? { id: -1, boxState: boxState.FACE_DOWN, color: '' } // dummy
        : { ...this.state.boxes[this.state.previousId] };
    let newPreviousID = null;
    let isMatch = false;

    if (previousCopy.color === currentCopy.color) {
      console.log('Matching');
      previousCopy.boxState = boxState.MATCHING;
      currentCopy.boxState = boxState.MATCHING;
      newPreviousID = -1;
      isMatch = true;
    } else {
      previousCopy.boxState = boxState.FACE_DOWN;
      currentCopy.boxState = boxState.FACE_UP;
      newPreviousID = id;
    }

    let newBoxes = [...this.state.boxes];
    newBoxes[this.state.previousId] = previousCopy;
    newBoxes[id] = currentCopy;

    this.setState((prevState, props) => {
      return {
        boxes: newBoxes,
        previousId: newPreviousID,
        guessedPairs: isMatch ? isMatch + 1 : prevState.guessedPairs
      };
    });
  };

  resetGame = () => {
    this.setState({
      boxes: this.props.boxes,
      guessedPairs: 0,
      previousId: -1
    });
  };

  setUpColors = noOfClrs => {
    const half = Array(noOfClrs / 2)
      .fill()
      .map(() => this.getRandomColor());
    let whole = [...half, ...half];
    return this.getShuffledArr(whole);
  };

  getShuffledArr = arr => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    return (
      <div className="constainer">
        <button onClick={this.resetGame}>Reset</button>
        <BoxesList boxes={this.state.boxes} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;

App.defaultProps = {
  boxes: [
    { id: 0, boxState: boxState.FACE_DOWN, color: 'blue' },
    { id: 1, boxState: boxState.FACE_DOWN, color: 'Aqua' },
    { id: 2, boxState: boxState.FACE_DOWN, color: 'yellow' },
    { id: 3, boxState: boxState.FACE_DOWN, color: 'pink' },
    { id: 4, boxState: boxState.FACE_DOWN, color: 'purple' },
    { id: 5, boxState: boxState.FACE_DOWN, color: 'red' },
    { id: 6, boxState: boxState.FACE_DOWN, color: 'brown' },
    { id: 7, boxState: boxState.FACE_DOWN, color: 'coral' },
    { id: 8, boxState: boxState.FACE_DOWN, color: 'yellow' },
    { id: 9, boxState: boxState.FACE_DOWN, color: 'blue' },
    { id: 10, boxState: boxState.FACE_DOWN, color: 'pink' },
    { id: 11, boxState: boxState.FACE_DOWN, color: 'Aqua' },
    { id: 12, boxState: boxState.FACE_DOWN, color: 'purple' },
    { id: 13, boxState: boxState.FACE_DOWN, color: 'brown' },
    { id: 14, boxState: boxState.FACE_DOWN, color: 'coral' },
    { id: 15, boxState: boxState.FACE_DOWN, color: 'red' }
  ],
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

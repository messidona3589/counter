import {createContext, useState} from 'react';

const ColorContext = createContext({
  state: {color: 'black', subcolor: 'white'},
  actions: {
    setColor: () => {},
    setSubColor: () => {}
  }
});

const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('white');

  const value = {
    state: {color, subColor},
    actions: {setColor, setSubColor}
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
};

const ColorConsumer = ColorContext.Consumer;

export {ColorConsumer, ColorProvider};

export default ColorContext;
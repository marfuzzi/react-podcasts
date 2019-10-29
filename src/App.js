import React, { useContext } from 'react';
import Item from './Item';
import { ThemeContext, MeetupTextContext } from './context';

const App = () => {
  return (
    <div className={`card`}>
      <Item label={"Meetup"}>
      </Item>
    </div>
  );
};

export default App;

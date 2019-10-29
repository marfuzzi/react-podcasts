import React, { useContext } from 'react';
import Item from './Item';
import { ThemeContext, MeetupTextContext } from './context';

const AppUseContext = () => {
    const podcast = useContext(MeetupTextContext);
    const theme = useContext(ThemeContext);

    return (
        <div className={`card ${theme}`}>
            <Item label="Podcast">
                <h4>{podcast}</h4>
            </Item>
        </div>
    );
};

export default AppUseContext;

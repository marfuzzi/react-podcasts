import React, { useContext, useState, useEffect } from 'react';
import Item from './Item';
import { ThemeContext, MeetupTextContext } from './context';

const fetchUser = async (setUser) => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    setUser(data.results[0])
};

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWidth = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    });
    return width;
};

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    });
};

const useUserFetch = (flag) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetchUser(setUser)
    }, [flag]);
    return user;
};

const AppCustom = () => {
    const podcast = useContext(MeetupTextContext);
    const theme = useContext(ThemeContext);
    const [count, setCount] = useState(0);
    const [value, changeValue] = useState('Test value');
    const width = useWindowWidth();
    const user = useUserFetch(count);
    useDocumentTitle(value);

    const handleValueChange = (e) => {
        changeValue(e.target.value);
    };

    return (
        <div className={`card ${theme}`}>
            <Item label="Podcast">
                <h4>{podcast}</h4>
            </Item>

            <Item label={`Counter value is ${count}`}>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </Item>

            <Item label={`${value}`}>
                <input
                    value={value}
                    onChange={handleValueChange}
                />
            </Item>

            <Item label={`Browser window is`}>
                <h4>{width}</h4>
            </Item>

            <Item label="Fetch User">
                <div>{user ? `${user.name.first} ${user.name.last}` : ''}</div>
            </Item>

        </div>
    );
};

export default AppCustom;

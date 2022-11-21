import React, { useState } from 'react'

const getTheme = () => {
    const theme = localStorage.getItem('todo-app-theme');

    return theme ? theme : false;
}

export const ApplicationThemeContext = React.createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState( () => getTheme());

    return (
        <ApplicationThemeContext.Provider value={{appTheme : theme, setAppTheme: setTheme}}>
            <div className={theme ? 'dark' : 'light'}>
                {children}
            </div>
        </ApplicationThemeContext.Provider>
    )
}

export default ThemeProvider
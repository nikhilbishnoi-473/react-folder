import React, { useState } from 'react'; // Keep this import
import NavBar from '../usestate/NavBar';
import UseStarteOne from '../usestate/UseStarteOne';

const MyComponent = () => {  
    const [mode, setDarkMode] = useState("white");
const toggleMode = () => {
    if (mode === 'white'){
        setDarkMode('black');
        // document.body.style.backgroundColor= 'black'
    }
    else{
        setDarkMode('white')
        // document.body.style.backgroundColor= 'white'

    }
}
    return (
        <>
            <NavBar mode={mode} toggleMode={toggleMode} />
            <UseStarteOne />
        </>
    );
};


export default MyComponent;

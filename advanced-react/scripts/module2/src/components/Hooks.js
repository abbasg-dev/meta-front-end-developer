import React, { useState, useRef } from 'react';

function Hooks() {
    const formInputRef = useRef(null);
    // const developerName = useState('Abbas')
    const [developerName, setDeveloperName] = useState('Abbas')

    function updateDeveloperName() {
        setDeveloperName('abbasg')
    }

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <>
            <div>
                <h1>{developerName}</h1>
                <button onClick={updateDeveloperName}>Update Developer Name</button>
            </div>
            <div>
                <h1>Using useRef to access underlying DOM</h1>
                <input ref={formInputRef} type="text" />
                <button onClick={focusInput}>Focus input</button>
            </div>
        </>
    );
}

export default Hooks;

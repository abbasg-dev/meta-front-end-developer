import React from 'react';

function SideEffect() {

    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    React.useEffect(() => {
        document.title = toggle ? 'Welcome' : 'Using the useEffect hook'
    }, [toggle])

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle message
            </button>
            {toggle && <h2>Welcome</h2>}
        </div>
    );
}

export default SideEffect;

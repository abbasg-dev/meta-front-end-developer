function Example(props) {
    return (
        <>
            {props.children}
            <div className="heading">
                <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
                <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
                <p>The value of the math prop is: <em>{props.math}</em></p>
                <p>The value of the str prop is: <em>{props.str}</em></p>
            </div>
        </>
    );
}
export default Example
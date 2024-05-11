// function Btn() {
//     const clickHandler = () => console.log('clicked');

//     return (
//         <button onClick={clickHandler}>Click me</button>
//     )
// }

// export default Btn;

function Btn() {
    
    const clickHandler = () => console.log('mouse over');
    function thirdExample() { console.log('third example') };
    const fourthExample = () => console.log('fourth example');

    return (
        <>
            <button onMouseOver={clickHandler}>Click me</button>

            <div className="thirdExample">
                <button onClick={thirdExample}>
                    using a separate function declaration
                </button>
            </div>

            <div className="fourthExample">
                <button onClick={fourthExample}>
                    using a separate function expression
                </button>
            </div>
        </>
    )
}

export default Btn;
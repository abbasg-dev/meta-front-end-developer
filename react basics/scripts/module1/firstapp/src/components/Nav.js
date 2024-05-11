// function declaration
/*
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};
*/

// function expression - anonymous (nameless) function
// anonymous ES5 function
/*
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
}
*/

//Components as Arrow Functions
// ES6 version of JavaScript
/*
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
*/

//implicit return
const Nav = (props) => <ul><li>{props.first}</li></ul>

export default Nav;
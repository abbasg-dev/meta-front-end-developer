const Button = ({ type, children, ...buttonProps }) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button ${className}`} {...buttonProps}>{children}</button>
    )
}

const LoginButton = ({ type, children, ...buttonProps }) => {
    return (
        <Button
            type="secondary"
            {...buttonProps}
            onClick={() => { // overridden the on click prop in the log in button component
                alert("Logging in!");
            }}
        >
            {children}
        </Button>
    )
}

const SpreadOperator = () => {
    return (
        <>
            <Button type="primary" onClick={() => alert('Signing up!')}>
                Sign up
            </Button>
            <LoginButton type="secondary" onClick={() => alert('Signing up!')}>
                Login
            </LoginButton>
        </>
    )
}

export default SpreadOperator;
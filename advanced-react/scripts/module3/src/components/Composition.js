const Button = ({ children, backgroundColor }) => {
    return <button style={{ backgroundColor }}>{children}</button>
}

const Alert = ({ children }) => {
    return (
        <>
            <div className="Overlay" />
            <div className="Alert">{children}</div>
        </>
    )
}

const DeleteButton = () => {
    return <Button backgroundColor="red">Delete</Button>
}

const Composition = () => {
    return (
        <>
            <Alert>
                <h4>Delete Account</h4>
                <p>Are you sure you want to proceed? You will miss all your delicious recipes!</p>
            </Alert>
            <DeleteButton />
        </>
    )
}

export default Composition;
import { 
    useContext, 
    createContext, 
    useState,
    useMemo 
} from "react";

// Using the context requires 3 steps: creating, providing, and consuming the context.

const UserContext = createContext({
    userName: '',
    setUserName: () => {},
});

export default function Application() {

    const [userName, setUserName] = useState('Abbas Ghaith')

    // Memoization keeps the context value object the same as long as userName is the same,
    // preventing re-rendering of consumers every time the App re-renders.

    const value = useMemo(() => ({ userName, setUserName }), [userName]);

    return (
        <UserContext.Provider value={value}>
            <UserNameInput />
            <UserInfo />
        </UserContext.Provider>
    )
}

function UserNameInput() {
    const { userName, setUserName } = useContext(UserContext)
    const changeHandler = (event) => setUserName(event.target.value)

    return (
        <input
            type="text"
            value={userName}
            onChange={changeHandler}
        />
    )
}

function UserInfo() {
    const { userName } = useContext(UserContext);
    return <span>{userName}</span>
}

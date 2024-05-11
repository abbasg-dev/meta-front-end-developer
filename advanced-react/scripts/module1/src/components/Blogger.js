import { UserProvider, useUser } from "../context/UserContext"

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  )
}

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
}

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>{user.name}</h2>
      <p>I'm a mid-senior level Frontend Engineer with 4 years of experience, skilled in ReactJS Technology. Design experience with a UX/UI Design.</p>
      <p>My portfolio includes several ERP, POS and E-commerce projects.</p>
      <p>Frontend Developer</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Blogger() {
  return <UserProvider><App /></UserProvider>
}

export default Blogger;

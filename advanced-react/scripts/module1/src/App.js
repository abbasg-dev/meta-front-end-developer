import ListItems from "./components/ListItems";
import DessertsList from "./components/DessertsList";
import ToDo from "./components/ToDo";
import Forms  from './components/Forms';
import RegistrationForm from "./components/RegistrationForm";
import Blogger from "./components/Blogger";
import Main from "./components/Main";
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];
function App() {
  return (
    <>
      <ListItems />
      <DessertsList data={desserts} />
      <ToDo />
      <Forms />
      <RegistrationForm />
      <Blogger />
      <Main />
    </>
  )
}
export default App;
import Hooks from './components/Hooks';
import Goals from './components/Goals';
import GiftCard from './components/GiftCard';
import SideEffect from './components/SideEffect';
import Fetch from './components/Fetch';
import Bitcoin from './components/Bitcoin';
import User from './components/User';
import CustomHooks from './components/CustomHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hooks />
      <Goals />
      <GiftCard />
      <SideEffect />
      <Fetch />
      <Bitcoin />
      <User />
      <CustomHooks />
    </div>
  );
}

export default App;

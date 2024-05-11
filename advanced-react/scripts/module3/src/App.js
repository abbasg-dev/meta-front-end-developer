import Composition from './components/Composition';
import LiveOrders from './components/LiveOrders';
import SpreadOperator from './components/SpreadOperator';
import HOC from './components/HOC';
import DrinksCountApp from './components/DrinksCountApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant</header>
      <Composition />

      {/* React top-level APIs */}
      <LiveOrders />

      <SpreadOperator />

      <HOC />

      <DrinksCountApp />
    </div>
  );
}

export default App;

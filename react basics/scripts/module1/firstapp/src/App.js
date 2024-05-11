import Heading from './Heading';
import Example from './components/Example';
import Hello from './components/Hello';
import Trunk from './components/Trunk';
import Promo from './components/Promo';
import Nav from './components/Nav';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
function App() {

  // ternary operator
  let name = 'Abbas';
  name == 'Abbas' ? console.log('Hello, Abbas') : console.log('Hello, Friend');

  const bool = false; 
  const str1 = "just";

  return (
    <div className="App"> 
      <Heading />
      <Example 
        children={<Hello message="Hello Abbas" />}
        toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + ' another ' + 'string'}
      />
      <Example2 />
      <Example3 />
      <Trunk />
      <Promo 
        heading="Don't miss this deal!" 
        promoSubHeading="Subscribe to my newsletter and get all the shop items at 50% off!" 
      />
      <Nav first="Home" />
    </div> 
  );
}

export default App;

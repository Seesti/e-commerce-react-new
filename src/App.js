import './index.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Highlights from './components/ui/Highlight';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;

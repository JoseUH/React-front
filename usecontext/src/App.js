import './App.css';
import { SWContextProvider } from './context/context';
import Characters from './pages/Characters';
import Movies from './pages/Movies';

function App() {
  return (
    <div className="App">
    <SWContextProvider>
      <Characters/>
      <Movies/>
    </SWContextProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ChatWidget from './components/ChatWidget';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       
       <ChatWidget position="left"/>
      </header>
    </div>
  );
}

export default App;

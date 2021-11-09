import './App.css';
import Navbars from './components/topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars />
    </Router>
  );
}

export default App;

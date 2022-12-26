import './App.css';
import { Routes, useRoutes } from 'react-router-dom';
import routes from './routes';


function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Routes>
        {element}
      </Routes>
    </div>
  );
}

export default App;

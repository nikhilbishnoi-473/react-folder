import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/views/Home';
import Work from './components/views/Work';
import Practice from './components/views/Practice';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Practice' element={<Practice/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

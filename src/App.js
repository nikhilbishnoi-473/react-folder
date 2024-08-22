import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/views/Home';
import Work from './components/views/Work';
import UseState from './components/views/UseState';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/UseState' element={<UseState/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

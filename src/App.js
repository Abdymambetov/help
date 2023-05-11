import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './components/Book';
import Menu from './menu/Menu';
import Library from './pages/Library';
import Profile from './pages/Profile';
import ReadNow from './pages/ReadNow';
import SliderShow from './SliderShow';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<SliderShow/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/readNow' element={<ReadNow/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/:id' element={<Book/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

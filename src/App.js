import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { MovieDetail } from './Components/MovieDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path=':id/detail' element={ <MovieDetail/>}/>
      </Routes>
    </div>
    );
}

export default App;

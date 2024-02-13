import Nav from './Nav'
import Home from './Home'
import Filter from './Filter'
import Create from './Create'
import Show from './Show'
import { Route, Routes } from 'react-router-dom'
import './index.css'

const App = () => {

  return (
    <div>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </div>
  );
};

export default App;






















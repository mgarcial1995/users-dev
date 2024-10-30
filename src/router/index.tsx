import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import UsersPage from '../pages/Users';
import PokePage from '../pages/Pokemons';
import Layout from '../layouts/layout';

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<UsersPage />} />
          <Route path="/poke" element={<PokePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
  export default Router;
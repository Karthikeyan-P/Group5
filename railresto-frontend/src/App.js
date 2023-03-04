import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import OrderOnline from './pages/OrderOnline';
import AddMenu from './pages/ManageMenu/AddMenu';
import AddRestaurant from './pages/ManageMenu/AddRestaurant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HomePage />}>
          <Route index element={< Dashboard />} />
          <Route path="history" element={< History />} />
          <Route path="orderOnline" element={< OrderOnline />} />
          <Route path="addMenu" element={< AddMenu />} />
          <Route path="addRestaurant" element={< AddRestaurant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

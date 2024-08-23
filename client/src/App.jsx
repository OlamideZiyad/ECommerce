import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavigationBar from './components/NavBar';
import { AuthProvider } from './context/AuthContext';
// import PaymentPage from './pages/PayementPage';
// import ProductCard from './components/ProductCard';
// import Success from './pages/SuccessPage';
// import Cancel from './pages/CancelPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/payment" element={<PaymentPage />} />
          <Route path="/product" element={<ProductCard />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

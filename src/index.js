import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ProductPage from './pages/ProductPage';
import ProbabilityPage from './pages/ProbabilityPage';
import PointPage from './pages/PointPage';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        <Header/>
        <Routes>
          {/* 메인 페이지 및 기본 페이지 */}
          <Route path="/" element={<HomePage/>}/>
          {/* 로그인 페이지 */}
          <Route path="/Login" element={<LoginPage/>}/>
          {/* 가입 페이지 */}
          <Route path="/Join" element={<JoinPage/>}/>
          {/* 마이 페이지 */}
          <Route path="/Mypage" element={<MyPage/>}/>

          {/* 상품 페이지 */}
          <Route path="/Product" element={<ProductPage/>}/>
          {/* 확률 페이지 */}
          <Route path="/Probability" element={<ProbabilityPage/>}/>
          {/* 룰렛 페이지 */}
          <Route path="/Point" element={<PointPage/>}/>
        </Routes>
      {/* </Web3ReactProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

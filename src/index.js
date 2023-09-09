import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar';
import Posts from './components/Posts';
import SearchBar from './components/searchBar';
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <SearchBar />
    <Posts category="Deportes" name="FIFA 23" company="EA Sports" image="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000047794/40f9e2f6d344d2607d4be72c6c4ebd3c18717ff87a56d6bbc303c42e58dd570d"/>
    <Posts category="metroidvania" name="Hollow knight" company="Team Cherry" image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51"/>
  </React.StrictMode>
);

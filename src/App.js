import logo from './logo.svg';
import './App.css';
import React from "react";
import Topbar from "./components/Topbar";


function App() {
  return (
    <div>
      <Topbar cartCount={2} wishlistCount={5} />
      {/* بقیه محتوای سایت */}

      </header>
    </div>
  );
}

export default App;

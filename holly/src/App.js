import React from "react";
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./route/Home";
import About from "./route/About";
import Contact from "./route/Contact";
import Faqs from "./route/Faqs";
import Support from "./route/Support";

function App() {
    return (
        <div className="App">
            <div className="bord">
                <div className="content">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/faqs" element={<Faqs/>}/>
                            <Route path="/support" element={<Support/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;

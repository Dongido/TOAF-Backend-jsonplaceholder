import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { GetPhotos } from './Components/GetPhotos'

function App() {
    return ( 
      <div className="container">
        <div class="container py-2">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-3">
              <h1 class="display-5 fw-bold">Photo Gallery</h1>
              <p class="col-md-8 fs-4"> Welcome to photo gallery. 
              Data source from <b>json placeholder </b> </p> 
            </div>
          </div>
        </div>

        <GetPhotos />
      </div>
      
    );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


import MyListDrum from './listDrum';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <p>
      <div class="title-container">
            <span>Drum</span>
            <img class="logo-img" src="https://f7-zpcloud.zdn.vn/1017756757484395760/0cd6e9c7dcf01bae42e1.jpg" alt=""/>
            <span>Kit</span>
        </div>
   <MyListDrum/>
  </p>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

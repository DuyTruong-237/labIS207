import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './exercise0/ex0';
import MySection from "./exercise0/MySection";
import MyButton from "./exercise0/MyButton";
import MyComponent from "./exercise0/MyComponent";
import './exercise2/App2'
import App2 from './exercise2/App2';
import MyComponent1 from './exercise0/MyComponent1';
import MyButton1 from './exercise1/Mybutton1';
import MyInput from './exercise3/MyInput';
import App3 from './exercise2/App3';
import Exercise2 from './exercise2/App1';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const array= ["First", "Second", "Third"];

const object ={
   first:1,
   second:2,
   third:3,
};
const card = {
  title:"Elon Musk",
  desciption:"Elon Musk FRS is a business magnate , ...",
  avatar:"https://ichef.bbci.co.uk/news/976/cpsprodpb/14B1D/production/_125556748_gettyimages-1240422158.jpg"

}
const smartPeople =[
  {name: 'Johann Geothe', age: 82, IQ: 210},
  {name: 'Albert Einstein', age: 76, IQ: 205},
  {name: 'Leonardo da Vinci', age: 67, IQ: 180},
  {name: 'Isaac Newton', age: 82, IQ: 210},
  {name: 'Jame Maxwell', age: 48, IQ: 190},
  {name: 'Rudolf Clausius', age: 66, IQ: 190},
  {name: 'Nicolaus Copernicus', age: 70, IQ: 160},
  {name: 'Gottfried Leibniz', age: 70, IQ: 180},
  {name: 'William Sidis', age: 46, IQ: 200}
]

const element = (
  <ul>
    <li>{smartPeople.name}</li>
  </ul>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <p>
   Hello, <strong>JSX</strong>
   <br/>
    <div>
      <button/>
      <code/>
      <input/>
      <label/>
      <p/>
      <pre/>
      <select/>
      <table/>
      <ul/>
    </div>
    <section>
      <header>
        <h1>A Header</h1>
      </header>
      <nav>
        <a href="item">Nav Item</a>
      </nav>
      <main>
        <p>The main content...</p>
      </main>
        <footer>
          <small>&copy; 2021</small>
        </footer>
      
    </section>

    <MySection>
        <MyButton>My Button Text</MyButton>
    </MySection>
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((i)=>(
          <li key={i}>{i}</li>
        )
        )}
      </ul>

      <h1>Object</h1>
      <ul>
        {Object.keys(object).map((i) => (
          <li key={i}>
            <strong>{i}: </strong>
            {object[i]}
          </li>
        ))}
      </ul>
    </section>
    <MyComponent/>
    <MyComponent1/>
    <MyButton1/>
    <Exercise2/>
    <App2/>
    <App3 name="abc"/>
    <MyInput/>
    <div style={{ textAlign: "center", fontSize: 15, color: "#2F4F4F", background: "\#D3D3D3", border: '1px outset #d0f0c0',margin:20 }}>Green is the prime color of the world</div>
   <element/>
   <Card style={{ width: '18rem' , margin:20}}>
      <Card.Img variant="top" src={card.avatar} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.desciption}
        </Card.Text>
        <Button variant="primary">Click me!</Button>
      </Card.Body>
    </Card>
  </p>
  
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

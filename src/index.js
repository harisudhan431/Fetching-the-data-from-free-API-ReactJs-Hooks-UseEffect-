import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
  
// function Header(){
//   return(
//     <div>
//       <h1>This is header</h1>
//       <p>I am Kabil</p>
//     </div>
//   );
// } 

// function Container(){
//   return(
//     <div>
//       <ul>
//         <li>Hari Sudhan</li>
//         <li>Irshad Raja</li>
//       </ul>
     
//     </div>
//   );
// } 
// function Footer(){
//   return(
//     <div>
//       <h1>Thanks for Visiting My website</h1>
//     </div>
//   );
// } 

// function Finalout(){
//   return(
//     <div>
//       <Header />
//       <Container />
//       <Footer />
//     </div>
//   );
// }

// ReactDOM.render(<Finalout />,document.getElementById('root'));






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

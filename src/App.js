import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import { gsap } from 'gsap';
// Asset files
import './assets/scss/App.scss';

// component
import Header from './component/header'

// View page
import About from './views/About';
import Home from './views/Home';

// route pages
const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about', name: 'About', Component: About}

];

function App() {

  const onEnter = node =>{
      gsap.from([node.children[0].firstElementChild, node.children[0].lastElementChild],
    0.6,
    {
        y: 30,
        delay: 0.6,
        opacity: 0,
        ease: "power3.InOut",
        stagger: {
            amount: 0.6
        }
    }
    );
  };

  const onExit = node =>{
    gsap.to([node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
          y: -30,
          ease: "power3.InOut",
          stagger: {
              amount: 0.6
          }
      }
      );
    };

  return (
    <>
    <Header />
    <div className="container">
     {routes.map(({path, Component})=>(
       <Route key="name" path={path} exact>
           {({match}) =>(
             <CSSTransition in={match != null} timeout={1200} classNames="page" onEnter={onEnter} onExit={onExit}  unmountOnExit>
         <div className="page">
           <Component/>
         </div>
             </CSSTransition>
           )}
         
       </Route>
     ))}
     </div>
     </>
  );
}

export default App;

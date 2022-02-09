import React from 'react';
import './App.css';
import Loginform from './loginform.jsx';
import {Routes,
Route,
NavLink,
useLocation
} from 'react-router-dom';
import { House, Key, Headphones, Collection, Instagram, Facebook, Github, EmojiLaughingFill } from 'react-bootstrap-icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Formsubscribe from './formsubscribe.jsx';
import Assistant from './assistant.jsx';
import Contactimg from './contactimg.jpg';

/*function MoveLinkLeft(Elem){
  Elem.style.transform='rotate(60deg)';
  return new Promise(Moved =>{
    setTimeout(()=>{
      Moved('1MovementLeft');
    }, 300);
  });
  }

async function MoveLinkRight(Elem) {
  const result = await MoveLinkLeft(Elem);
  console.log(result);
  Elem.style.transform='rotate(-55deg)';
  return new Promise(Moved => {
    setTimeout(() => {
      Moved('2MovementRight');
    }, 300);
  });
}

async function LinkMovement(Elem) {
  console.log('calling');
  const result = await MoveLinkRight(Elem);
  console.log(result);
  Elem.style.transform='rotate(30deg)';
  console.log('3MovementLeft');
  setTimeout(()=>{
    Elem.style.transform='rotate(0deg)';
    console.log('4Movement')}
    ,300);
}*/

const Home =()=>{
    return(
      <div className='Home' id='Home'>
        <div className='box'>
          <div className='HomeText'>
          <h1>Home</h1>
          <p>Hello, there, this is a template of a Web-Page develeped in React.js, with no Back-end part
            Hope you'll like it. Find my repositories on Github, you can share me a star.
          </p>
          </div>
          <div className='Examples'>
              <div className='City' id='California' onMouseOver={(e)=>{e.currentTarget.children[1].style.opacity='1';}} onMouseOut={(e)=>{e.currentTarget.children[1].style.opacity='0';}}>
                <h2>California</h2>
                <p className='CityText'>Beautiful views, amazing landscapes, take a break in the city that never sleeps!</p>
              </div>
              <div className='City' id='Tampa' onMouseOver={(e)=>{e.currentTarget.children[1].style.opacity='1';}} onMouseOut={(e)=>{e.currentTarget.children[1].style.opacity='0';}}>
                <h2>Tampa</h2>
                <p className='CityText'>nothing better than a sip on a sunny beach, won't you try the water?</p>
              </div>
              <div className='City' id='NewYork' onMouseOver={(e)=>{e.currentTarget.children[1].style.opacity='1';}} onMouseOut={(e)=>{e.currentTarget.children[1].style.opacity='0';}}>
                <h2>New York</h2>
                <p className='CityText'>Ready for the Big Apple? Capital of the world, you'll be fascinated by the lights. </p>
            </div>
          </div>
        </div>
        <div className='btnshomewrapper'>
            <button className='btn' onClick={()=>{
              window.location = 'mailto:vincenzodnm@outlook.it'
            }
          }>Send E-Mail</button>
            <button className='btn'onClick={()=>{
             window.open('https://github.com/enzo-boop');
            }
            }>Find on Github</button>
          </div>
      </div>
    );
  }
  
  const Support=()=>{
    return(
        <div className='boxsupport'>
        <div className='SupportText'>
        <h1>Support Section</h1>
        <p>Are you looking for some help?<br/>Ask to our virtual assistant, he can easily resolve the common issue<br/>Not satisfact of our assistant ask us on Support@Support.com.</p>
        </div>
        <Assistant/>
        </div>
    );
  }
  
  const Login=()=>{
    return(
      <div>
        <div className='box'>
        <h1>Access Section</h1>
        <Loginform/>
        <Formsubscribe/>
      </div>
      </div>
    );
  }
  
  const Contacts= ()=>{
    return(
        <div className='box'>
        <h1>Contacts</h1>
        <div className="socialframe">
        <div className='socialwrapper'>
          <Instagram className='socialicon'/>
          <a href="https://www.instagram.com/vincenzodnm/" className='socialink'>INSTAGRAM</a>
        </div>
        <div className='socialwrapper'>
          <Facebook className='socialicon'/>
          <a href="https://www.facebook.com/vincenzo.donnarumma.92/" className="socialink">FACEBOOK</a>
        </div>
        <div className='socialwrapper'>
          <Github className='socialicon'/>
          <a href="https://github.com/enzo-boop" className="socialink">GITHUB</a>
        </div>
        <div className="contentwrapper">
          <img src={Contactimg} style={{margin:'10px  0 10px 0',borderRadius:'0 5px 5px 0',filter:'brightness(0.9)'}} height='250px' width='380px' alt='no available'/>
          <p className='credits'><EmojiLaughingFill className='Emoji'/>developed by: vincenzodnm</p>
        </div>
        </div>
        </div>
    )
  }

  export default function App(){
  const location = useLocation();
      return(
  <div>
    <nav onMouseOver={(e)=>{
      e.stopPropagation();
      e.currentTarget.style.height='40px';
      e.currentTarget.firstChild.style.opacity='1';
    }} onMouseOut={(e)=>{
      e.stopPropagation();
      e.currentTarget.style.height='15px';
      e.currentTarget.firstChild.style.opacity='0';
    }}>
      <div className='fadelink'>
    <NavLink activeclassname="active" to='/'><House width='64px' height='64px'/></NavLink>
    <NavLink to='/Login' ><Key width='64px' height='64px'/></NavLink>
    <NavLink to='/Support'><Headphones width='64px' height='64px'/></NavLink>
    <NavLink to='/Contacts'><Collection width='64px' height='64px'/></NavLink>
    </div>
  </nav>
  <TransitionGroup>
  <CSSTransition key={location.key} classNames="fade" timeout={300}>
  <Routes location={location}>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Support' element={<Support/>}></Route>
    <Route path='/Contacts' element={<Contacts/>}></Route>
  </Routes>
  </CSSTransition>
  </TransitionGroup>
  </div>
  );
}
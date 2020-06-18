import React from 'react';
import { Router, Route, Switch } from "react-router";
import CarIndex from './views/car/CarIndex'
import CarEdit from './views/car/CarEdit'
import CarNew from './views/car/CarNew'
import CarShow from './views/car/CarShow'
import Profile from './views/user/Profile'
import Analytics from './views/user/Analytic'
import Favorite from './views/user/Favorite'
import BookingCalendar from './views/user/BookingCalendar'
import Cart from './views/cart/Cart'
import CarPartEdit from './views/car_part/CarPartEdit'
import CarPartIndex from './views/car_part/CarPartIndex'
import CarPartNew from './views/car_part/CarPartIndex'
import LogIn from './views/user/LogIn'
import SignUp from './views/user/SignUp'
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar';
import './App.css';
import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css'
import './assets/fontawesome-free-5.11.2-web/css/all.css'
import Home from './views/car/Home';
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import About from './views/car/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ReviewIndex from './views/reviews/ReviewIndex';


function App() {
  AOS.init();
  return (
   <Router history={createBrowserHistory()}>    
      <Switch>
          <React.Fragment>
            <Navbar/>
            <ToastContainer
                    position="top-center"
                    autoClose={50000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
             
              <Route exact path='/' render={renderProps => <Home {...renderProps} /> } />
              
              {/*These routes are the routes for the cart */}
              <Route exact path='/cars' render={renderProps => <CarIndex {...renderProps} /> } />
              <Route  path='/cars/:id/edit' render={renderProps => <CarEdit {...renderProps}/>} />
              <Route  path='/cars/new' render={renderProps => <CarNew {...renderProps} />} />            
              <Route  path = "/cars/:id/show" render={renderProps => <CarShow {...renderProps}/>} />


              {/* user routes */}
              <Route path='/users/:id' render={renderProps => <Profile/>} />
              <Route path='/users/:id/favorites' render={renderProps => <Favorite/>} />
              <Route path='/reviews' render={renderProps => <ReviewIndex/>} />

              {/* These routes are the routes for the booking process */}          
              <Route path='/bookings' render={renderProps => <BookingCalendar {...renderProps}/>}  />
              {/**Display analytics for the admin only */}
              <Route  path='/login' render={renderProps => <LogIn {...renderProps}/>}  />
              <Route  path='/signup' render={renderProps => <SignUp {...renderProps}/>}  /> 
              <Route  path='/about' render={renderProps => <About {...renderProps}/>}  />


              {/**Cart routes */}
              {/* <Route path='/cart' render={renderProps => <Cart/>} /> */}

              {/**Car Parts routes */}
              <Route path='/parts/new' render={renderProps => <CarPartNew/>} />
              <Route path='/parts' render={renderProps => <CarPartIndex/>} />
              <Route path='/parts/:id/edit' render={renderProps => <CarPartEdit/>} />
            </React.Fragment>
         
       </Switch>
    </Router>

  );
}

export default App;

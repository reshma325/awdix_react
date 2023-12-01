

import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Homepage from './components/Homepage';
import Count from './components/Count'
import Effect1 from './components/Effect1';
import Effect2 from './components/Effect2';
import Effect3 from './components/Effect3';
import Effect4 from './components/Effect4';

import Params from './components/Params';
import SingleProduct from './components/SingleProduct';
import Mapping from './components/Mapping';
import Ternary from './components/Ternary';
import { useState } from 'react';
import StyledComponent from './components/StyledComponent ';
import CountSE from './components/CountSE';
import DynamicStyling from './components/DynamicStyling';
import ChildrenComponent from './components/ChildrenComponent';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound'
import ClassComponent from './components/ClassComponent';
import Products from './components/Products';
import NewSingleProdcut from './components/NewSingleProdcut';
import AddProduct from './components/AddProduct';
import UseMemo from './components/UseMemo';
import UseCallBack from './components/UseCallBack';
import UseReducer from './components/UseReducer';
import TestReducer from './components/TestReducer';
import CustomHook from './components/CustomHook';
import CustomHookLS from './components/CustomHookLS';
import YourProducts from './components/YourProducts';
import UpdateProduct from './components/UpdateProduct';
import Navbar from './components/Common/Navbar';
import Profile from './components/Profile';
import Cart from './components/Cart';




function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  return (

    <div className="App">
            <Navbar/>
      <Routes>
  

        <Route exact path='*' element={<PageNotFound />} />

        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={< Login />} />
        <Route exact path='/count' element={< Count />} />
        <Route exact path='/effect1' element={< Effect1 />} />
        <Route exact path='/effect2' element={< Effect2 />} />
        <Route exact path='/effect3' element={< Effect3 />} />
        <Route exact path='/effect4' element={< Effect4 />} />
        <Route exact path='/params' element={< Params />} />
        <Route exact path='/single/:id' element={< SingleProduct />} />
        <Route exact path='/mapping' element={< Mapping kuchbhi={["abc", "xyz", "pqr"]} />} />
        <Route exact path='/ternary' element={< Ternary loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path='/styled' element={< StyledComponent />} />
        <Route exact path='/countSE' element={< CountSE />} />
        <Route exact path='/dynamic' element={< DynamicStyling />} />
        <Route exact path='/childrencomponent' element={< ChildrenComponent />} />
        <Route exact path='/register' element={< Register />} />
        <Route exact path='/classcomponent' element={< ClassComponent />} />
        <Route exact path='/products' element={< Products />} />
        <Route exact path='/newsingleproduct/:id' element={< NewSingleProdcut />} />
        <Route exact path='/addproduct' element={< AddProduct />} />
        <Route exact path='/usememo' element={< UseMemo/>} />
        <Route exact path='/usecallback' element={< UseCallBack/>} />
        <Route exact path='/usereducer' element={<UseReducer />} />
        <Route exact path='/testreducer' element={<TestReducer />} />
        <Route exact path='/customhook' element={<CustomHook />} />
        <Route exact path='/customhookls' element={<CustomHookLS />} />
        <Route exact path='/your_products' element={<YourProducts/>} />
        <Route exact path='/update_product/:id' element={<UpdateProduct/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/viewCart' element={<Cart/>} />
        

      </Routes>
    </div>
  );
}

export default App;

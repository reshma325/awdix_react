
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Homepage from './components/Homepage';
import Count from './components/Count'
import Effect1 from './components/Effect1';
import Effect2 from './Effect2';
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



function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  return (

    <div className="App">
      <Routes>

        <Route path='*' element={<PageNotFound />} />

        <Route path='/' element={<Homepage />} />
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
      </Routes>
    </div>
  );
}

export default App;

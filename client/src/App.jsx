
import React,{ Component } from 'react';
import Header from './components/nav-bar.jsx';
import Slider from './components/carousel.jsx';
import Second from './components/second.jsx';
import Ready from './components/ready.jsx';
import Footer from './components/footer.jsx';
import Calculator from './components/calc.jsx';

import '../dist/stylesass.scss';

export default class App extends Component {

  render () {
    return (

      <div className="parent">
        <Header/>
        <Second/>
        <Slider/>
        <Calculator/>
        <Ready/>
        <Footer/>
      </div>
    )
  }
}

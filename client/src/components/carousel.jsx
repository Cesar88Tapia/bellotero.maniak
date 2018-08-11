
import React,{Component} from 'react';
import {Carousel , Item, Caption} from 'react-bootstrap';

export default class Slider extends Component {

  render(){
    return(
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img src="https://i.imgur.com/c3oHd6c.png"/>
          <Carousel.Caption>
            <div><h3>First slide label</h3></div>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/aUAVwEg.png"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    )
  }
};

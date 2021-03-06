import React,{Component} from 'react'

export default class Header extends Component {

  render(){
    return (
    <div className='NavBar'>
        <div className="menu"><img src="https://i.imgur.com/hHs8P2k.png"/>
        <button className="main">Feature</button>
        <button className="resolved">Solutions</button>
        <button className="people">Stories</button>
        <button className="associate">Partners</button>
        <button className="info">About</button>
        <button className="blogging">Blog</button>
        <button className='top_request'>Request a demo</button>
        <button className="logIn">Log In</button></div>
        <img  className='NavBar_Img' src="https://i.imgur.com/fe0ReEm.png"/>
        <input
          className="input_box"
          type="text"
          placeholder="Your email address"/>
        <div className="digitilize"><p><b>Digitilize your invoices</b>
        <br/>
         and craete your own<br/>
       shopping cart</p>
        </div>
       <button className="bottom_request"> Request a demo</button>
    </div>
    )
  }
};

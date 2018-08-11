
import React,{Component} from 'react';

export default class Footer extends Component {

  render(){
    return(

    <div className="social_media">
      <img className="bottom_icon" src="https://i.imgur.com/W0fH71E.png"/>
      <div className="Bellotero">
        <h3 >Bellotero.io</h3>
          <a>Features</a><br/>
          <a>Solutions</a><br/>
          <a>stories</a><br/>
          <a>About</a><br/>
          <a>Blog</a>
      </div>
      <div className="social">
        <h3>Social</h3>
          <a href="https://www.facebook.com/"> Facebook </a><br/>
          <a href="https://twitter.com/hola_holacode?lang=en"> Twitter </a><br/>
          <a href="https://www.linkedin.com/feed/"> LinkedIn </a><br/>
          <a href="https://www.instagram.com/holacode/?hl=en"> Instagram </a>
      </div>
      <div className="support">
        <h3>Support</h3>
          <a> support@bellotero </a><br/>
          <a> (555)555-5555 </a><br/>
          <a> Chat now </a><br/>
      </div>
      <div className="app_store">
        <img src="https://i.imgur.com/SSOm98w.png"/><br/>
        <img src="https://i.imgur.com/R6P8o3r.png"/>
      </div>
    </div>
    )
  }
};

import React,{Component} from 'react';

export default class Ready extends Component{


  render(){
    return(
      <div className="ready_component">
        <div className="ready">
          <p>Ready to get started<br/>
             with Bellotero.io?
           </p>
        </div>
        <div className="anual_data">
          <p>No more manual data entry.<br/>
            Hands off. Thumbs up
          </p>
        </div>
        <div className="ready_input">
          <input
            placeholder='youre email address'/>
        </div>
        <div className="ready_button" ><button>request a demo</button></div>
      </div>
    )
  }
};

import React,{Component} from 'react';
import {Grid, Col , Row} from 'react-bootstrap';

export default class Second extends Component {

  render(){
    return(
      <div>
      <div className="second_part">
        <div className="images">
         <img className='logo-1' src="https://i.imgur.com/v8JYNkA.png"/>
         <img className='logo-2' src="https://i.imgur.com/0Vplf2z.png"/>
         <img className='logo-3' src="https://i.imgur.com/EqutDDJ.png"/>
         <img className='logo-3' src="https://i.imgur.com/mFawK6W.png"/>
         <img className='logo-4' src="https://i.imgur.com/tkDEiHC.png"/>
       </div>
       <div className="top">
        <p><b>Bellotero.io is the digital solution that <br/>
        gives you fast, accurate, automated <br/>
        accounts payable and smart, <br/>
        business-transforming insights.</b></p>
       </div>
        <img className="top_picture" src="https://i.imgur.com/FUq98w7.png" />
        <div className="middle">
          <p> Get the full picture.<br/> In half the time
          Threads keep all your conversations clearly<br/>
          seperated by topic so replies wont get <br/>
          buried in an endless stream of group chat</p>
        </div>
          <img className="bottom_picture" src="https://i.imgur.com/qiMb8Hg.png" />
        <div className="time_saving"><p><b>Time saving,<br/> Moneymaking.</b></p></div>
        <div className="body">
          <p>Bellotero.io automatically turns your<br/>
             threaded conversations into a searchable<br/>
             catalog of topics.</p></div>
          <Grid>
            <Row>
              <Col md={4}>
                <img src='https://i.imgur.com/aUAVwEg.png'/>
                      <p>hello</p>

              </Col>
              <Col md={4}>
                <img src='https://i.imgur.com/URp3aUP.png'/>
                <p>abimael</p>
              </Col>
              <Col md={4}>
                <img src='https://i.imgur.com/c3oHd6c.png'/>
                      <p>how are you</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

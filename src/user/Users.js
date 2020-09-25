import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Users.css';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import { Row } from 'react-bootstrap';
import Sellers from './sellers/Sellers';
import Buyer from './buyer/Buyer';

class Users extends Component {

  constructor(props){
      super(props);

      this.state = {
        isBuyer: true,
      }
  }
 
 
   
  goToBuyer = () => {
     this.setState({ isBuyer: true });
   }

   goToSeller = () => {
    this.setState({ isBuyer: false });
  }

 //  goSeller = () => setSeller(!isBuyer);


  render() { 
    return ( 
      <div className="container users" style={{ width: "90%", margin: "0 auto" }}>
      <div className="container-one slider seller-and-buyer-button">
        <div className="container-slider">
          <span>
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg"/>
            <img src={image2} className="sliderimg"/>
            <img src={image3} className="sliderimg"/>
          </AliceCarousel>
          </span>
        </div>
        <div className="under-slider">
          <div className="under-slider-container">
            <Row className="title">
                <h2>Rawmart</h2>
            </Row>
            <div className="description button-seller-buyer">
              <ul className="description-detail">
                <li className="description-detail-item">Please</li>
                <li className="description-detail-item">choose your</li>
                <li className="description-detail-item">profile preference</li>
                <li className="description-detail-item link"><a href="#" onClick={() => this.goToBuyer()}>Buyer</a></li>
                <li className="description-detail-item link"><a href="#" onClick={() => this.goToSeller()}>Seller</a></li>
              </ul>
            </div>
          </div>
        </div>
    
      </div>
      <div className="container-two login-and-signup-form">
        <div className="general-container-seller-and-buyer">

        { this.state.isBuyer ? <Buyer /> : <Sellers /> }
         
        </div>
      </div>
    </div>
     );
  }
}
 
export default Users;


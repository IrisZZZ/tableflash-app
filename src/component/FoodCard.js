
import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const relPath = "images/"


class FoodCard extends Component {
  
    state = {  }
    
    render() { 

        let path = relPath + this.props.src;
        console.log(path);
        return (
            <div className="card" > 
              
                <div className="imgwrapper">
                    <img src={path} />
                </div>
                <div className="description">
                <h2>{this.props.title}</h2>
                <p>{this.props.des}</p>
                </div>
                
        
            </div>
          );
    }
}
 
export default FoodCard;
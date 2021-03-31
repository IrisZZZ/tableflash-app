import React, { Component } from 'react';
import FoodCard from './FoodCard';
import mockdata from '../static/mockdata'
class CardList extends Component {
    state = {  }
    render() { 
        return (
           
            <div className="cardlist">
               {mockdata.map((data) => {
                                return <FoodCard src={data.src} des={data.des} title={data.title}/>
                            })}

            </div>
          );
    }
}
 
export default CardList;
<div>
    <FoodCard/>
</div>
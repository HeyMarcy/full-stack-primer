import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

class CheeseList extends React.Component {
componentDidMount() {
  console.log("hello")
    this.props.fetchCheeses();
  }

  render(){
    console.log(this.props.cheeses);
    if (!this.props.cheeses){
      return <h1>Loading...</h1>
    }
    const cheeses = this.props.cheeses;
         return (

             <div className="cheese">
             <h1> The  Cheese List </h1>

              {cheeses.map(function(cheese, index) {
                return <li key={index}> {cheese} </li>
              })}

             </div>
         );
     }
 }
 export default connect(
   state => ({
     cheeses: state.cheeses
   }),
   { fetchCheeses }
 )(CheeseList)

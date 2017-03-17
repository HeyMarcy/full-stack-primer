import React from 'react';
import ReactDOM from 'react-dom';



export default class CheeseList extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    console.log('hello world')
      return (

          <div>
          { this.props.cheese}
          </div>
      );
  }

}

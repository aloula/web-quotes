import React from 'react';
import axios from 'axios';

let config = {
  method: 'get',
  url: 'https://uwqsvjyp1h.execute-api.us-east-2.amazonaws.com/items',
  headers: { 
   'Content-Type': 'application/json'
  }
};


export default class PersonList extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios(config)
    .then(res => {
      console.log("API Response:", res.data);
      const items = res.data["Items"];
      //const count = res.data["Count"];
      this.setState({ items });
      console.log(this.state.items)
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.items
            .map(quote =>
              <li key={quote.id}>
                <p> "{quote.quote}" - {quote.author}</p>
                <p> -------------------------------------- </p>              
              </li>          
            )
        }
      </ul>  
    )
  }
}
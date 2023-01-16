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
      console.log(res.data);
      const items = res.data["Items"];
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
              <p> "{quote.quote}" - {quote.author}</p>
            )
        }
      </ul>
    )
  }
}
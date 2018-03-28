import React, { Component } from 'react';
import items from '../items';

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items
    }
  }

  render() {
    const { items } = this.state;
    const piece = this.props.match.params.piece;

    const appart = items[piece];

    console.log(appart);
    return (
      <div>
        {
          appart.map((data, index) => {
            return (
              <ul key={index}>
                <li>
                  {data.name}
                  {data.checked ? <p>V</p> : <p>X</p>}
                  {data.expansive ? <p>Cher</p> : <p>Pas cher</p>}
                </li>
              </ul>
            );
          })
        }
      </div>
    );
  }
}
 
export default Piece;
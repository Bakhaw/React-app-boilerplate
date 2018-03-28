import React, { Component } from 'react';

class Item extends Component {
  render() { 
    return (
      <div>
        <ul>
          <li>{this.props.data.name}</li>
          {this.props.data.checked
            ? <li>V</li>
            : <li>X</li>
          }
          {this.props.data.expansive
            ? <li>V</li>
            : <li>X</li>
          }
        </ul>
      </div>
    );
  }
}
 
export default Item;
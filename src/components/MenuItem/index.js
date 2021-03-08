import React from "react"

export default class MenuItem extends React.Component {
  state = {
    numbers:[0]
  }
  
  handleClick() {
    this.setState();{
      numbers.push(number+1)
    }
  }
  render() {
    return (<div key={this.props.itemId} className="menu-item" id={`menu-item-${this.props.itemId}`}>
              <h2>{this.props.itemName}</h2>
              <span>${this.props.itemPrice }</span>
              <p>{this.props.itemDescription}</p>
          <button onClick={this.handleClick}>Add to Cart</button>
          </div>
    );
  }
}
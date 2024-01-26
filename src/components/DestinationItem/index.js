// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationsList} = this.props
    const {name, imgUrl} = destinationsList
    return (
      <li className="destination-item-card">
        <img src={imgUrl} alt={name} className="destination-img" />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem

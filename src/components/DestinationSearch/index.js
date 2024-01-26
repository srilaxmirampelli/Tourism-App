// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    const {destinationsList} = this.props
    this.state = {
      searchInput: '',
      updatedDestinationsList: destinationsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, updatedDestinationsList} = this.state
    const searchResults = updatedDestinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="destination-search-container">
        <div className="destination-search-content">
          <h1 className="main-heading">Tourist Places in India</h1>
          <div className="search-bar-container">
            <input
              type="search"
              className="search-input-bar"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="Search Icon"
            />
          </div>
          <ul className="destinations-list-container">
            {searchResults.map(each => (
              <DestinationItem destinationsList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

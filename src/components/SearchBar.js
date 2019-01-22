import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {
      // when changing state, always use setState
      this.setState({term: event.target.value})
    };

    onFormSubmit = (event) => {
      event.preventDefault();

      //callback from parent component
      this.props.onFormSubmit(this.state.term);
    };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input 
                  onChange={this.onInputChange} 
                  type="text" 
                  value={this.state.term}

                />
            </div>
        </form>
      </div>
    )
  }
}

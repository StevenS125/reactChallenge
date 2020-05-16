import React from 'react';
import ReactDOM from 'react-dom';

import config from '../config';
import logo from './static/logo.svg';
import './style.css';

// components
import Table from './components/table'

/*
This is a stubbed React functional component using React Effects and Hooks
https://reactjs.org/docs/hooks-effect.html
Feel free to use React class components and lifecycle hooks if that is more comfortable for you
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      type: 'name',
      selectValue: 'name'
    };
}


updateQuery = (query) => {
  if (query === '') {
    this.setState(() => ({
        query
    }))
} else {
this.setState(() => ({
    query: query
})
)}}

handleChange = (event) => {
  this.setState({selectValue: event.target.value});
}

handleSubmit = (e) => {
    fetch(`${config.API_URL}?type=${this.state.selectValue}&value=${this.state.query}`)
    .then(res => res.json())
    .then((res) => {
        this.setState({
          dataFromApi: res
        }, () => console.log(this.state.dataFromApi))
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    e.preventDefault();
}

render() {

  const { query } = this.state

  return (
    <div id="app" className="search-books">
      <form onSubmit={this.handleSubmit}>
        <div className="search-books-bar">
              <div className="search-books-input-wrapper">
                <input
                    className='search-contacts'
                    type='text'
                    placeholder='Search by username, name or category'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
                <label>
                Search By:
                  <select value={this.state.selectValue} onChange={this.handleChange}>
                    <option value="username">Username</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                  </select>
              </label>
            <input type="submit" value="Submit" />
                </div>
          </div>
      </form>
    <Table tableData={this.state.dataFromApi}/>
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('main'));

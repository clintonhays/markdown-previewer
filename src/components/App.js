import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  state = { value: '' };

  handleChange = (event) => {
    this.setState = {
      value : event.target.value,
    };
  };

  render () {
    return (
      <div id="container">
        <Editor onChange={this.handleChange} value={this.state.value} />
        <Preview value={this.state.value} />
      </div>
    );
  }
}

export default App;

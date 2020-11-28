import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  render () {
    return (
      <div id="container">
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default App;

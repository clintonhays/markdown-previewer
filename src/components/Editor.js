import React, { Component } from 'react';
import Preview from './Preview';

class Editor extends Component {
  state = {
    value : '',
  };

  handleChange = (e) => {
    this.setState({
      value : e.target.value,
    });
  };

  render () {
    return (
      <div className="container">
        <textarea defaultValue={this.state.value} onChange={this.handleChange} id="editor" cols="30" rows="10" />

        <Preview value={this.state.value} />
      </div>
    );
  }
}

export default Editor;

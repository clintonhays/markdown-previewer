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
        <h1>Markdown Editor</h1>
        <textarea
          defaultValue={this.state.value}
          onChange={this.handleChange}
          name="markdown-editor"
          id="editor"
          placeholder="Enter markdown to see a preview below."
          cols="30"
          rows="10"
        />
        <h2>Markdown Preview</h2>
        <Preview value={this.state.value} />
      </div>
    );
  }
}

export default Editor;

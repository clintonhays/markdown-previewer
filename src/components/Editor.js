import React, { Component } from 'react';
import Preview from './Preview';

const placeholder = `# This is a heading. Using 1 hashtag.

## This is a sub-heading. More hashtags makes it smaller.

Links are made like [this](crhdev.com). Links use [] and ().

Now for some \`<p>Code</p>\`! Inline code is wrapped in \`\`.

Code blocks use \`\`\` like this:

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- List items use dashes.
  - And indentations.
    - As many as you need.

> "Block quotes use the greater than (>) symbol."

**Make your text bold** with two asterisks.

Add images with ![] and the image address in ()
![React Logo](https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/8575147831553750379-256.png)
`;

class Editor extends Component {
  state = {
    value : placeholder,
  };

  handleChange = (e) => {
    this.setState({
      value : e.target.value,
    });
  };

  render () {
    return (
      <div className="container">
        <div className="text">
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
        </div>
        <div className="preview">
          <h1>Markdown Preview</h1>
          <Preview value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default Editor;

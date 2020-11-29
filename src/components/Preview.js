import React from 'react';

const marked = require('marked');
marked.setOptions({
  breaks : true,
});

const Preview = ({ value }) => {
  return <div id="preview" dangerouslySetInnerHTML={{ __html: marked(value) }} />;
};

export default Preview;

import React from 'react';

const Editor = (value, handleChange) => {
  return (
    <div id="editor">
      <textarea value={value} onChange={handleChange} cols="30" rows="10" />
    </div>
  );
};

export default Editor;

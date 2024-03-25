"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (html) => {
    setContent(html);
  };

  return (
    <div>
      <h2>Quill Editor</h2>
      <QuillEditor value={content} onChange={handleEditorChange} />
      <h3>Content:</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Editor;

const QuillEditor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value);

  const handleChange = (html) => {
    setEditorHtml(html);
    if (onChange) {
      onChange(html);
    }
  };

  return (
    <ReactQuill
      theme="snow" // Specify Quill theme
      value={editorHtml}
      onChange={handleChange}
    />
  );
};

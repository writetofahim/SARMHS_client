import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const RichTextEditor = ({ setEditorHtml, editorHtml }) => {
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };
  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={RichTextEditor.modules}
      />
    </div>
  );
};

RichTextEditor.modules = {
  //   toolbar: [
  //     [{ header: "1" }, { header: "2" }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["link"],
  //     ["clean"],
  //   ],
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],

  // formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image'
  // ],
};

export default RichTextEditor;

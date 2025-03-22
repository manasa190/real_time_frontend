import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function DocumentEditor() {
  const [content, setContent] = useState("");

  const handleChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="document-editor">
      <ReactQuill
        value={content}
        onChange={handleChange}
        placeholder="Start typing your document..."
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "link",
          "image",
        ]}
      />
    </div>
  );
}
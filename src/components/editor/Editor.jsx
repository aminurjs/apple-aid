"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import ImageUpload from "./ImageUpload";
import { Button } from "../ui/button";
import useAxios from "@/hooks/useAxios";

const Editor = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const axios = useAxios();

  const handleEditorChange = (html) => {
    setContent(html);
  };

  console.log({ title, image, content });

  const handlePost = async () => {
    if (title.length === 0 || content.length === 0) return;
    const postData = {
      title,
      image,
      content,
    };
    axios
      .post(`/post`, postData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        return console.log(error.code);
      });
  };

  return (
    <div className="bg-white rounded-md p-5">
      <div className="flex flex-col md:flex-row my-5 gap-5">
        <div className="flex-1">
          <label
            htmlFor="title"
            className="mb-2 text-primary font-medium block"
          >
            Post title:
          </label>

          <input
            id="title"
            type="text"
            placeholder="Type posts title..."
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 w-full outline-none text-xl font-semibold placeholder:font-normal"
          />
        </div>
        <ImageUpload sendImage={setImage} />
      </div>
      <h2 className="mb-2 text-primary font-medium">Write your post:</h2>
      <div className="mb-5">
        <QuillEditor value={content} onChange={handleEditorChange} />
      </div>
      <div onClick={handlePost}>
        <Button
          className="border-red-2 text-red-2 rounded-none hover:bg-red-2 hover:text-white"
          variant="outline"
        >
          Publish
        </Button>
      </div>
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
      placeholder="Write something..."
      height="400px"
    />
  );
};

import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class EditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  render() {
    const { value, onChange } = this.props;

    return (
      <div className="w-full full flex flex-col justify-center items-center">
        <div className="w-50per h-20 items-center justify-center flex mt-10">
          <input
            type="text"
            className="w-full h-1/2 border-2 border-gray-200 px-2"
            placeholder="제목"
          />
        </div>
        <div className="w-50per h-full">
          <ReactQuill
            style={{ height: "500px" }}
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            value={value || ""}
            onChange={(content, delta, source, editor) =>
              onChange(editor.getHTML())
            }
          />
        </div>
        <div className="w-50per h-20 flex justify-center items-center mt-20">
          <button className="w-40 h-20 border-2 border-gray-200 bg-yellow-700 text-white text-center">
            저장
          </button>
        </div>
      </div>
    );
  }
}
export default EditorComponent;

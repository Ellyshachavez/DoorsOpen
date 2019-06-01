import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function DropDown(props) {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Title
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Agent
        </a>
        <a class="dropdown-item" href="#">
          Loan Officer
        </a>
      </div>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

export function uploadPic() {
  return (
    <input
      name="file"
      type="file"
      className="file-upload"
      data-cloudinary-field="image_id"
      data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
    />
  );
}

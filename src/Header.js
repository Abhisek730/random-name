import React from "react";

export default function Header() {
  return (
    <div className="text-center">
      <h1>Hello</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-centerv ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-auto">CONTACT MANAGER</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Title({ fontSize, text }) {
  return (
    <Link to="/">
      <h1
        style={{ fontSize, color: "black", textAlign: "center" }}
        className="title main-title mt-2 ml-4"
      >
        {text}
      </h1>
    </Link>
  );
}

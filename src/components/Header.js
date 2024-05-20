import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container-fluid bg-warning">
      <div className="container p-2">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>My logo</h2>
          </div>
          <nav className="col-auto">
            <ul>
              <li>
                <Link to="/student">Student</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

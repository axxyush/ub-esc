import React from "react";
import { Link } from "react-router-dom";

function Projectitem(props) {
  return (
    <>
      <div className="col">
        <div style={{ backgroundColor: "#ededed" }} className="card shadow-sm ">
          <img style={{ height: "300px" }} src={props.img} />
          <div className="card-body">
            <h3 className="fs-2 text-body-emphasis ">
              <b>{props.title}</b>
            </h3>
            <p className="card-text">{props.description}</p>
            <Link
              to="/vocallens"
              className="d-flex justify-content-between align-items-center"
            >
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projectitem;

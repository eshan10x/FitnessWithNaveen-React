import React from "react";
import Navbar from "./Navbar";
import "../css/Rates.css";
import { Link } from "react-router-dom";

function Rates(props) {
  return (
    <div className="rates">
      <div className="rates__header">
        <Navbar />
        <h1>Rates</h1>
      </div>

      <div className="withdrawRates">
        <h3 className="rateTitle">Personal Training RATES</h3>
        <div className="rowRates">
          <div className="collom4 coll1" style={{ maxWidth: "360px" }}>
            <h1>Personal Training</h1>
            <h3>
              <span>RS. 30,000</span>
            </h3>
            <p>Special Offer 25%</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          <div className="collom4 coll2" style={{ maxWidth: "360px" }}>
            <h1>Online Training</h1>
            <h3>
              <span>RS. 30,000</span>
            </h3>
            <p>.</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          <div className="collom4 coll3" style={{ maxWidth: "360px" }}>
            <h1>Home Visit</h1>
            <h3>
              <span>Rs. 35,000</span>
            </h3>
            <p>For two 45, 000</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          <div className="collom4 coll7" style={{ maxWidth: "360px" }}>
            <h1>Online ABS Class</h1>
            <h3>
              <span>Rs. 12,000</span>
            </h3>
            <p>Per Person</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          <div className="collom4 coll4" style={{ maxWidth: "360px" }}>
            <h1>OutDoor Training</h1>
            <h3>
              <span>RS. 10,000</span>
            </h3>
            <p>Group more than 3 people 8,000 for each</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          <div className="collom4 coll5" style={{ maxWidth: "360px" }}>
            <h1>WorkOut Plan</h1>
            <h3>
              <span>Rs. 20,000</span>
            </h3>
            <p>Per Person</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          <div className="collom4 coll6" style={{ maxWidth: "360px" }}>
            <h1>Meal Plan .</h1>
            <h3>
              <span>Rs. 20,000</span>
            </h3>
            <p>Starting 20,000</p>
            <Link to="/contact">
              <button className="btn">Join Now</button>
            </Link>
          </div>
          
        </div>
      </div>

      {/* <div className="withdrawRates2">
        <h2>Day Passes</h2>
        <p>$15/Day</p>
      </div> */}

      <div className="withdrawRates4">
        <p>Corporate Memberships are available!</p>
        <br />

        <p>
          For questions about memberships please contact us via email or phone
          or Go to the Contact Page.
        </p>
        <br />
        <p>Email: fitnesswithnaveen@gmail.com</p>
        <p>Phone: 076 687 6602</p>
      </div>

      <div className="withdrawRates3">
        <h2>
          Now you can save yourself a few steps by signing up for a membership
          online!
        </h2>
        <h4>Join us now</h4>
      </div>
    </div>
  );
}

export default Rates;

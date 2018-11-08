import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <h3 className="bd-title">Hello! Welcome to the Clarendon Reporter</h3>
      <ul className="list-group home-menu">
        <li className="list-group-item text-left">
          <Link className="" to="/clarendon-report">
            Report End-of-Day Pastry Inventory
          </Link>
        </li>
        <li className="list-group-item text-left">
          <Link className="" to="/clarendon-order">
            Request Items from Shawmut
          </Link>
        </li>
        <li className="list-group-item text-left">
          <Link className="" to="/bakery">
            View Inventory
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

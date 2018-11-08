import React from 'react';

const Report = () => {
  return (
    <div className="d-flex flex-column">
      <h3 className="bd-title">Report Pastry Inventory</h3>
      <form>
        <div className="form-group">
          <label>Plain Croissants</label>
          <input type="number" className="form-control" placeholder="0" />
        </div>
      </form>
    </div>
  );
};

export default Report;

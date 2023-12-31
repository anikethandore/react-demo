

export default function Filter() {
  return (
    <div className="card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="col">
                <select className="form-control form-select ">
                    <option value="">Store By</option>
                </select>
              </div>
              <div className="col mx-1">
                 <select className="form-control form-select ">
                    <option value="">Complex</option>
                </select>
              </div>
              <div className="col mx-1">
                 <select className="form-control form-select ">
                    <option value="">Building</option>
                </select>
              </div>
              <div className="col mx-1">
                 <select className="form-control form-select ">
                    <option value="">Connection Type</option>
                </select>
              </div>
              <div className="col mx-1">
                 <select className="form-control form-select ">
                    <option value="">Select Month</option>
                </select>
              </div>

                <button className="btn btn-sm btn-primary mx-2">Apply Filter </button>
            </div>
        </div>
    </div>
  );
}

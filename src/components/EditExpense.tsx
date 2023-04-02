import type { NextPage } from "next";
const EditExpense: NextPage = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-center text-lg font-bold">Edit Expense</h3>
          <div className="flex-column form-control mx-auto flex gap-2 ">
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter an expense"
                className="input-bordered input"
              />
            </label>
            <label className="input-group">
              <span>Amount</span>
              <input
                type="currency"
                placeholder="$"
                className="input-bordered input"
              />
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                placeholder="Category"
                className="input-bordered input"
              />
            </label>
            <label className="input-group">
              <span>Date</span>
              <input
                type="date"
                placeholder="Date"
                className="input-bordered input"
              />
            </label>
            <label className="input-group">
              <span>Notes</span>
              <input
                type="text"
                placeholder="Notes"
                className="input-bordered input"
              />
            </label>
            <button className="btn-outline btn">Submit</button>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn-sm btn-circle btn absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;

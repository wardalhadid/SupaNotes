import type { NextPage } from "next"


const AddExpenseForm: NextPage = () => {
  return (
    <div className="form-control flex mx-auto gap-2 flex-row w-11/12 items-center mb-5">
  <label className="input-group input-group-vertical">
    <span>Name</span>
    <input type="text" placeholder="Enter an expense" className="input input-bordered" />
  </label>
  <label className="input-group input-group-vertical">
    <span>Amount</span>
    <input type="currency" placeholder="$" className="input input-bordered" />
  </label>
  <label className="input-group input-group-vertical">
    <span>Category</span>
    <input type="text" placeholder="Category" className="input input-bordered" />
  </label>
  <label className="input-group input-group-vertical">
    <span>Date</span>
    <input type="date" placeholder="Date" className="input input-bordered" />
  </label>
  <label className="input-group input-group-vertical">
    <span>Notes</span>
    <input type="text" placeholder="Notes" className="input input-bordered" />
  </label>
  <button className="btn btn-active">+</button>
</div>
  );
}

export default AddExpenseForm;
import type { NextPage } from "next";
import { api } from "~/utils/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AddNoteForm: NextPage = () => {
  const ctx = api.useContext();
  const [input, setInput] = useState({ title: "", note: "" });
  const { mutate } = api.notes.addNotes.useMutation({
    onSuccess: () => {
      setInput({ title: "", note: "" });
      void ctx.notes.getNotes.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error("failed to post! please try again later.");
      }
    },
  });

  return (
    <div className="flex justify-center">
      <label htmlFor="my-modal-6" className="btn">
        Add Note
      </label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom flex  flex-grow flex-col items-center justify-center sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>

          <label className="input-group flex w-full grow flex-row justify-start">
            <span>Title</span>
            <input
              type="text"
              className="input-bordered input"
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
          </label>
          <label className="label">
            <textarea
              placeholder="note"
              className="textarea-bordered textarea textarea-lg w-full"
              onChange={(e) => setInput({ ...input, note: e.target.value })}
            ></textarea>
          </label>
          <label
            htmlFor="my-modal-6"
            className="btn-outline btn-wide btn mt-2 w-full"
            onClick={() => mutate(input)}
          >
            Add
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddNoteForm;

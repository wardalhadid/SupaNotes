import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "~/utils/api";


const EditExpense: NextPage = () => {
  const utils = api.useContext();
  const router = useRouter();
  const { id, title, note } = router.query;
  const { mutate } = api.notes.deleteNote.useMutation({
    onSuccess: () => {
      void utils.notes.getNotes.invalidate();
    },
  });
  const [titleInput, setTitle] = useState(title || "");
  const [noteInput, setNote] = useState(note || "");
  const {mutate: edit} = api.notes.editNote.useMutation({
    onSuccess: () => {
      void utils.notes.getNotes.invalidate();
    },
  });
  return (
    <div className="flex h-screen w-full flex-col gap-4 p-6">
      <Link
        className="btn-ghost btn bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl normal-case text-transparent"
        href={"/"}
      >
        SupaNotes
      </Link>
      <input
        value={titleInput}
        className="bg-transparent p-2 text-2xl"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <hr className="w-full bg-white" />
      <textarea
        className="h-full w-full bg-transparent p-4 text-lg"
        value={noteInput}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div className="mx-auto flex justify-center gap-4 p-8 ">
        <a href="/">
          <button
            className="btn-xl btn-primary btn"
            onClick={() => {
              edit({ id, title: titleInput, note: noteInput });
            }}
          >
            Save
          </button>
        </a>
        <a href="/">
          <button
            className="btn-outline btn-xl btn-error btn"
            onClick={() => {
              mutate({ id });
              }}
          >
            Delete
          </button>
        </a>
      </div>
    </div>
  );
};

export default EditExpense;

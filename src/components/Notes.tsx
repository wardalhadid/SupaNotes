import type { NextPage } from "next";
import { api } from "~/utils/api";
import Link from "next/link";

const Notes: NextPage = () => {
  const { data } = api.notes.getNotes.useQuery();
  if (!data) return <div>Add a note...</div>;
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {data.map((note) => (
        <div
          className={`card glass w-96 hover:cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          key={note.id}
        >
          <Link href={{
            pathname: `/editExpense/${note.id}`,
            query: { id: note.id, title: note.title, note: note.note},
            }}>
          <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p>{note.note}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Notes;

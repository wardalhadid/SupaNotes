import type { NextPage } from "next";
import { api } from "~/utils/api";
import Link from "next/link";

const Notes: NextPage = () => {
  const { data } = api.notes.getNotes.useQuery();
  if (!data) return <div>Add a note...</div>;
  interface Query {
    id: string;
    title: string;
    note: string;
  }
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {data.map((note) => {
        const query: Query = {
          id: note.id, title: note.title, note: note.note
        }
        return(
        <div
          className={`card glass w-96 hover:cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          key={note.id}
        >
          <Link href={{
            pathname: `/editExpense/${note.id}`,
            query: {...query},
            }}>
          <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p>{note.note}</p>
          </div>
          </Link>
        </div>
      )})}
    </div>
  );
};

export default Notes;

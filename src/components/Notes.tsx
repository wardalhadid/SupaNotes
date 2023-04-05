import type { NextPage } from "next";
import { api } from "~/utils/api";

const Notes: NextPage = () => {
  const { data } = api.notes.getNotes.useQuery();

  if (!data) return <div>404</div>;

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {data.map((note) => (
        <div
          className={`card glass w-96 hover:cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          key={note.id}
        >
          <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p>{note.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;

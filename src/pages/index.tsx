import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Nav";
import Notes from "~/components/Notes";
import EditNote from "~/components/EditNote";
import { SignInButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { user } = useUser();
  const ctx = api.useContext();
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded || !isSignedIn || !user) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
        <label className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-6xl normal-case text-transparent">
          SupaNotes
        </label>
        <span className="btn-accent btn-wide btn-lg btn hover:cursor-pointer">
          <SignInButton />{" "}
        </span>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>SupaNotes</title>
        <meta name="description" content="Note taking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditNote />
      <main>
        <Navbar />
        <Notes />
      </main>
    </>
  );
};

export default Home;

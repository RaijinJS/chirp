import Head from "next/head";
import type { NextPage } from "next/types";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>post</div>
      </main>
    </>
  );
}

  export default SinglePostPage;
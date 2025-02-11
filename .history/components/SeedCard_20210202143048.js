import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SeedCard({ seedcardd, seedcardDeleted }) {
  const router = useRouter();

  const deleteSeedCard = async () => {
    try {
      await fetch('/api/deleteSeedCard', {
        method: 'DELETE',
        body: JSON.stringify({ id: seedcard.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      SeedCardDeleted();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {/* <p>{console.log("test")}</p> */}
      <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl text-gray-800 font-bold">
            {seedcardd.data.userEmail}
          </h2>
          <h2 className="text-xl text-gray-800 font-bold">
            {seedcardd.data.plantCategory}
          </h2>
          <h2 className="text-xl text-gray-800 font-bold">
            {seedcardd.data.nameCommon}
          </h2>
        </div>

        <Link href={`/edit/${seedcardd.id}`}>
          <a className="text-gray-800 mr-2">Edit {seedcardd.id}</a>
        </Link>
        <button onClick={deleteSeedCard} className="text-gray-800 mr-2">
          Delete
        </button>
      </div>
    </>
  );
}

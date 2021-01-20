import React from 'react';
// import Code from './code';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SeedCard({ seedcard, seedcardDeleted }) {
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
        <p>{console.log("test")}</p>
        <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.plantCategory} 
                </h2> 
                <p>Test</p>
                
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.nameScientific}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.nameCommon}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.typeOption}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.height}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.siteLight}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.spacing}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.daysToGerminate}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.plantingDepth}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.daysToMaturity}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.pinch}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowInsideWeeks}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowInsideBeforeOrAfter}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowInsideRecommended}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowOutsideWeeks}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowOutsideBeforeOrAfter}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.successiveSowing}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowEveryXStartWeeks}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.sowEveryXEndWeeks}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.notes}
                </h2>
                <h2 className="text-xl text-gray-800 font-bold">
                    {seedcard.data.harvestInstructions}
                </h2>
            </div>
            {/* <p className="text-gray-900 mb-4">{card.data.plantCategory}</p> */}
            
            <Link href={`/edit/${seedcard.id}`}>
                <a className="text-gray-800 mr-2">Edit {seedcard.id}</a>
            </Link>
            <button onClick={deleteSeedCard} className="text-gray-800 mr-2">
                Delete
            </button>
        </div>
        </>
    );
}

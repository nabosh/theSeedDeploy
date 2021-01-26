import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import netlifyAuth from '../netlifyAuth'
import netlifyIdentity from 'netlify-identity-widget'



export default function SeedCardForm({ seedcard }) {
    // const user = netlifyIdentity.currentUser();
    // const userId = user.email;
    // console.log(userId);

    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            userEmail: seedcard ? seedcard.data.userEmail : '',
            plantCategory: seedcard ? seedcard.data.plantCategory : '',
            nameScientific: seedcard ? seedcard.data.nameScientific : '',
            nameCommon: seedcard ? seedcard.data.nameCommon : '',
            typeOption: seedcard ? seedcard.data.typeOption : '',
            height: seedcard ? seedcard.data.height : '', 
            siteLight: seedcard ? seedcard.data.siteLight : '', 
            spacing: seedcard ? seedcard.data.spacing : '', 
            daysToGerminate: seedcard ? seedcard.data.daysToGerminate : '', 
            plantingDepth: seedcard ? seedcard.data.plantingDepth : '', 
            daysToMaturity: seedcard ? seedcard.data.daysToMaturity : '', 
            pinch: seedcard ? seedcard.data.pinch : '', 
            sowInsideWeeks: seedcard ? seedcard.data.sowInsideWeeks : '', 
            sowInsideBeforeOrAfter: seedcard ? seedcard.data.sowInsideBeforeOrAfter : '', 
            sowInsideRecommended: seedcard ? seedcard.data.sowInsideRecommended : '', 
            sowOutsideWeeks: seedcard ? seedcard.data.sowOutsideWeeks : '', 
            sowOutsideBeforeOrAfter: seedcard ? seedcard.data.sowOutsideBeforeOrAfter : '', 
            sowOutsideRecommended: seedcard ? seedcard.data.sowOutsideRecommended : '', 
            successiveSowing: seedcard ? seedcard.data.successiveSowing : '', 
            sowEveryXStartWeeks: seedcard ? seedcard.data.sowEveryXStartWeeks : '', 
            sowEveryXEndWeeks: seedcard ? seedcard.data.sowEveryXEndWeeks : '', 
            notes: seedcard ? seedcard.data.notes : '', 
            harvestInstructions: seedcard ? seedcard.data.harvestInstructions : '',
        },
    });
    
    const router = useRouter();

    const createSeedCard = async (data) => {
        const { userEmail, plantCategory, nameScientific, nameCommon, typeOption, 
            height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, 
            sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, 
            sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, 
            sowEveryXEndWeeks, notes, harvestInstructions } = data;
        try {
            await fetch('/api/createSeedCard', {
                method: 'POST',
                body: JSON.stringify({ userEmail, plantCategory, nameScientific, nameCommon, 
                    typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, 
                    daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, 
                    sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, 
                    sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const updateSeedCard = async (data) => {
        const { plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, 
            daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, 
            sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, 
            sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, 
            harvestInstructions } = data;
        const id = seedcard.id;
        try {
            await fetch('/api/updateSeedCard', {
                method: 'PUT',
                body: JSON.stringify({ plantCategory, nameScientific, nameCommon, typeOption, height, 
                    siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, 
                    sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, 
                    sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, 
                    sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions, id }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <form onSubmit={handleSubmit(seedcard ? updateSeedCard : createSeedCard)}>
            <button
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="submit">
                Save
            </button>
            <Link href="/">
                <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Cancel
                </a>
            </Link>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="userEmail"
                >
                    userEmail
                </label>
                <textarea
                    name="userEmail"
                    id="userEmail"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Scientific Name"
                    ref={register({ required: true })}
                ></textarea>
                {errors.userEmail && (
                    <p className="font-bold text-red-900">
                    userEmail is required
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="plantCategory"
                >
                    Plant Category
                </label>
                <select
                    id="plantCategory"
                    name="plantCategory"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Flower</option>
                    <option className="py-1">Vegetable</option>
                    <option className="py-1">Herb</option>
                </select>
                {errors.plantCategory && (
                    <p className="font-bold text-red-900">plantCategory is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="nameScientific"
                >
                    nameScientific
                </label>
                <textarea
                    name="nameScientific"
                    id="nameScientific"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Scientific Name"
                    ref={register({ required: true })}
                ></textarea>
                {errors.nameScientific && (
                    <p className="font-bold text-red-900">
                    nameScientific is required
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="nameCommon"
                >
                    nameCommon
                </label>
                <textarea
                    name="nameCommon"
                    id="nameCommon"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Common Name"
                    ref={register({ required: true })}
                ></textarea>
                {errors.nameCommon && (
                    <p className="font-bold text-red-900">
                    nameCommon is required
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="plantCategory"
                >
                    Plant Type
                </label>
                <select
                    id="typeOption"
                    name="typeOption"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Annual</option>
                    <option className="py-1">Biennial</option>
                    <option className="py-1">Perennial</option>
                    <option className="py-1">N/A</option>
                </select>
                {errors.typeOption && (
                    <p className="font-bold text-red-900">typeOption is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="height"
                >
                    Height
                </label>
                <textarea
                    name="height"
                    id="height"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Scientific Name"
                    ref={register({ required: true })}
                ></textarea>
                {errors.height && (
                    <p className="font-bold text-red-900">
                    height is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="siteLight"
                >
                    Site Light
                </label>
                <select
                    id="siteLight"
                    name="siteLight"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Full Sun</option>
                    <option className="py-1">Part Sun</option>
                    <option className="py-1">Shade</option>
                    <option className="py-1">N/A</option>
                </select>
                {errors.siteLight && (
                    <p className="font-bold text-red-900">typeOption is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="spacing"
                >
                    Spacing
                </label>
                <textarea
                    name="spacing"
                    id="spacing"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Spacing"
                    ref={register({ required: true })}
                ></textarea>
                {errors.spacing && (
                    <p className="font-bold text-red-900">
                    Spacing is required
                    </p>
                )}
            </div>
            
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="daysToGerminate"
                >
                    daysToGerminate
                </label>
                <textarea
                    name="daysToGerminate"
                    id="daysToGerminate"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="daysToGerminate"
                    ref={register({ required: true })}
                ></textarea>
                {errors.daysToGerminate && (
                    <p className="font-bold text-red-900">
                    daysToGerminate is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="plantingDepth"
                >
                    plantingDepth
                </label>
                <textarea
                    name="plantingDepth"
                    id="plantingDepth"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="plantingDepth"
                    ref={register({ required: true })}
                ></textarea>
                {errors.plantingDepth && (
                    <p className="font-bold text-red-900">
                    Spacing is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="daysToMaturity"
                >
                    daysToMaturity
                </label>
                <textarea
                    name="daysToMaturity"
                    id="daysToMaturity"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="daysToMaturity"
                    ref={register({ required: true })}
                ></textarea>
                {errors.daysToMaturity && (
                    <p className="font-bold text-red-900">
                    daysToMaturity is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="pinch"
                >
                    Pinch
                </label>
                <select
                    id="pinch"
                    name="pinch"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Yes</option>
                    <option className="py-1">No</option>
                </select>
                {errors.pinch && (
                    <p className="font-bold text-red-900">pinch is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowInsideWeeks"
                >
                    sowInsideWeeks
                </label>
                <textarea
                    name="sowInsideWeeks"
                    id="sowInsideWeeks"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Sow Inside Weeks"
                    ref={register({ required: true })}
                ></textarea>
                {errors.sowInsideWeeks && (
                    <p className="font-bold text-red-900">
                    sowInsideWeeks is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowInsideBeforeOrAfter"
                >
                    Pinch
                </label>
                <select
                    id="sowInsideBeforeOrAfter"
                    name="sowInsideBeforeOrAfter"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Before</option>
                    <option className="py-1">After</option>
                </select>
                {errors.sowInsideBeforeOrAfter && (
                    <p className="font-bold text-red-900">pinch is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowInsideRecommended"
                >
                    sowInsideRecommended
                </label>
                <select
                    id="sowInsideRecommended"
                    name="sowInsideRecommended"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Yes</option>
                    <option className="py-1">No</option>
                </select>
                {errors.sowInsideRecommended && (
                    <p className="font-bold text-red-900">sowInsideRecommended is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowOutsideWeeks"
                >
                    sowOutsideWeeks
                </label>
                <textarea
                    name="sowOutsideWeeks"
                    id="sowOutsideWeeks"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Sow Inside Weeks"
                    ref={register({ required: true })}
                ></textarea>
                {errors.sowOutsideWeeks && (
                    <p className="font-bold text-red-900">
                    sowOutsideWeeks is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowOutsideBeforeOrAfter"
                >
                    sowOutsideBeforeOrAfter
                </label>
                <select
                    id="sowOutsideBeforeOrAfter"
                    name="sowOutsideBeforeOrAfter"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Before</option>
                    <option className="py-1">After</option>
                </select>
                {errors.sowOutsideBeforeOrAfter && (
                    <p className="font-bold text-red-900">sowOutsideBeforeOrAfter is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowOutsideRecommended"
                >
                    sowOutsideRecommended
                </label>
                <select
                    id="sowOutsideRecommended"
                    name="sowOutsideRecommended"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Yes</option>
                    <option className="py-1">No</option>
                </select>
                {errors.sowOutsideRecommended && (
                    <p className="font-bold text-red-900">sowOutsideRecommended is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="successiveSowing"
                >
                    successiveSowing
                </label>
                <select
                    id="successiveSowing"
                    name="successiveSowing"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >
                    <option className="py-1">Yes</option>
                    <option className="py-1">No</option>
                </select>
                {errors.successiveSowing && (
                    <p className="font-bold text-red-900">successiveSowing is required</p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowEveryXStartWeeks"
                >
                    sowEveryXStartWeeks
                </label>
                <textarea
                    name="sowEveryXStartWeeks"
                    id="sowEveryXStartWeeks"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="sowEveryXStartWeeks"
                    ref={register({ required: true })}
                ></textarea>
                {errors.sowEveryXStartWeeks && (
                    <p className="font-bold text-red-900">
                    sowEveryXStartWeeks is required
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="sowEveryXEndWeeks"
                >
                    sowEveryXEndWeeks
                </label>
                <textarea
                    name="sowEveryXEndWeeks"
                    id="sowEveryXEndWeeks"
                    rows="1"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="sowEveryXEndWeeks"
                    ref={register({ required: true })}
                ></textarea>
                {errors.sowEveryXEndWeeks && (
                    <p className="font-bold text-red-900">
                    sowEveryXEndWeeks is required
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="notes"
                >
                    notes
                </label>
                <textarea
                    name="notes"
                    id="notes"
                    rows="3"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="notes"
                    ref={register({ required: true })}
                ></textarea>
                {errors.notes && (
                    <p className="font-bold text-red-900">
                    notes is required
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="harvestInstructions"
                >
                    harvestInstructions
                </label>
                <textarea
                    name="harvestInstructions"
                    id="harvestInstructions"
                    rows="3"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="harvestInstructions"
                    ref={register({ required: true })}
                ></textarea>
                {errors.harvestInstructions && (
                    <p className="font-bold text-red-900">
                    harvestInstructions is required
                    </p>
                )}
            </div>














            <button
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="submit"
            >
                Save
            </button>
            <Link href="/">
                <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Cancel
                </a>
            </Link>
        </form>
    );
}

// import netlifyIdentity from 'netlify-identity-widget'
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

// import { useState, useEffect } from 'react'
// import netlifyAuth from '../netlifyAuth'
// import netlifyIdentity from 'netlify-identity-widget'
// const userr = netlifyIdentity.currentUser();
// const userEmaill = userr.email;
// console.log(userEmaill);

const getSeedCards = async () => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('seedcards'))),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    const seedcards = data.map((seedcard) => {
        seedcard.id = seedcard.ref.id;
        delete seedcard.ref;
        return seedcard;
    });
    
    return seedcards;
};

const getSeedCardById = async (id) => {
    const seedcard = await faunaClient.query(
        q.Get(q.Ref(q.Collection('seedcards'), id))
    );
    seedcard.id = seedcard.ref.id;
    delete seedcard.ref;
    return seedcard;
};

const createSeedCard = async (userEmaill, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions) => {
    return await faunaClient.query(
        q.Create(q.Collection('seedcards'), {
            data: { userEmaill, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions },
        })
    );
};

const updateSeedCard = async (id, userEmail, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions) => {
    return await faunaClient.query(
        q.Update(q.Ref(q.Collection('seedcards'), id), {
            data: { userEmaill, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions },
        })
    );
};

const deleteSeedCard = async (id) => {
    return await faunaClient.query(
        q.Delete(q.Ref(q.Collection('seedcards'), id))
    );
};

// const getAllOfUserSeeds = async (id) => { // I am not sure yet how to narrow these results by the user [20210125.11:19:00]
//     q.Map(
//         q.Paginate(q.Match(q.Index("all_Seeds"))),
//        (seedRef) => q.Get(seedRef)
//      )
// }

module.exports = {
    createSeedCard,
    getSeedCards,
    getSeedCardById,
    updateSeedCard,
    deleteSeedCard,
    // getAllOfUserSeeds,
};

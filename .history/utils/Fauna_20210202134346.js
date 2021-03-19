// import netlifyIdentity from 'netlify-identity-widget'
// import User from ./.
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const getSeedCards = async (user) => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Match(q.Index('filter_by_userEmail'), user)),
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

const createSeedCard = async (userEmail, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions) => {
    return await faunaClient.query(
        q.Create(q.Collection('seedcards'), {
            data: { userEmail, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions },
        })
    );
};

const updateSeedCard = async (id, userEmail, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions) => {
    return await faunaClient.query(
        q.Update(q.Ref(q.Collection('seedcards'), id), {
            data: { userEmail, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions },
        })
    );
};

const deleteSeedCard = async (id) => {
    return await faunaClient.query(
        q.Delete(q.Ref(q.Collection('seedcards'), id))
    );
};

module.exports = {
    createSeedCard,
    getSeedCards,
    getSeedCardById,
    updateSeedCard,
    deleteSeedCard,
};

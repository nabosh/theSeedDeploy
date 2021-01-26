import { updateSeedCard } from '../../utils/Fauna';
import netlifyIdentity from 'netlify-identity-widget'

export default async function handler(req, res) {
    // const user = netlifyIdentity.currentUser();
    // const userId = netlifyIdentity.currentUser().email;

    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    const { userId, plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, 
        sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, 
        sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions } = req.body;

    try {
        const updated = await updateSeedCard(
            userId,
            plantCategory, 
            nameScientific, 
            nameCommon, 
            typeOption, 
            height, 
            siteLight, 
            spacing, 
            daysToGerminate, 
            plantingDepth, 
            daysToMaturity, 
            pinch, 
            sowInsideWeeks, 
            sowInsideBeforeOrAfter, 
            sowInsideRecommended, 
            sowOutsideWeeks, 
            sowOutsideBeforeOrAfter, 
            sowOutsideRecommended, 
            successiveSowing, 
            sowEveryXStartWeeks, 
            sowEveryXEndWeeks, 
            notes, 
            harvestInstructions,
        );
        console.log({updated});
        return res.status(200).json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: '❌ Something went wrong. ❌' });
    }
}

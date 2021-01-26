import { updateSeedCard } from '../../utils/Fauna';
export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    const { , plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, 
        sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, 
        sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions } = req.body;

    try {
        const updated = await updateSeedCard(
            id,
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
        return res.status(200).json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: '❌ Something went wrong. ❌' });
    }
}

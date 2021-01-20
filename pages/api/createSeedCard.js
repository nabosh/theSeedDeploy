import { createSeedCard } from '../../utils/Fauna';
export default async function handler(req, res) {
    const { plantCategory, nameScientific, nameCommon, typeOption, height, siteLight, spacing, daysToGerminate, plantingDepth, daysToMaturity, pinch, 
        sowInsideWeeks, sowInsideBeforeOrAfter, sowInsideRecommended, sowOutsideWeeks, sowOutsideBeforeOrAfter, sowOutsideRecommended, successiveSowing, sowEveryXStartWeeks, sowEveryXEndWeeks, notes, harvestInstructions } = req.body;
    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
    try {
        const createdSeedCard = await createSeedCard(
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
            harvestInstructions
        );
        return res.status(200).json(createdSeedCard);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}

import { getSeedCards } from '../../utils/Fauna';
import { UserProvider }f

export default async function handler(req, res) {
  const userEmail = "nabosh@gmail.com"

    if (req.method !== 'GET') {
        return res.status(405);
    }
    try {
        const seedcards = await getSeedCards(userEmail);
        return res.status(200).json(seedcards);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}

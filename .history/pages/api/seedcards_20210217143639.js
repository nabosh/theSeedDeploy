import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
// import netlifyIdentity from 'netlify-identity-widget';
import { getSeedCards } from '../../utils/Fauna';


export default async function handler(req, res) {
  const { user } = useContext(UserContext);
//   console.log("💥💥💥 seedcards → USER::");
//   console.log(user);
  const userEmail = user;
  console.log('💥💥💥' );
  console.log(userEmail);

    // const userEmail = 'nabosh@gmail.com';

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

import React, { useContext } from 'react';
import { getSeedCards } from '../../utils/Fauna';
import { UserContext } from '../../context/UserContext';
import netlifyIdentity from 'netlify-identity-widget';


export default async function handler(req, res) {
//   const userEmail = "nabosh@gmail.com";
  const user = netlifyIdentity.currentUser();
//   const value = useContext(UserContext);
  const userEmail = user.email;

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

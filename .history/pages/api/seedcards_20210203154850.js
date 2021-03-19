import React, { useContext } from 'react';
import { getSeedCards } from '../../utils/Fauna';
import { AppContext } from '../../context/state';

export default async function handler(req, res) {
  // const userEmail = "nabosh@gmail.com"
  const value = useContext(AppContext);
  const userEmail = value;

    if (req.method !== 'GET') netl{
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

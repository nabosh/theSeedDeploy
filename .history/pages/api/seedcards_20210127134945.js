import React from 'react';
import { useState, useEffect } from 'react';
import netlifyAuth from '../../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';

import { getSeedCards } from '../../utils/Fauna';
import { userEmail } from '../hom';

export default async function handler(req, res) {

//   const user = netlifyIdentity.currentUser();
  const userEmail = user.email;
  // const userEmail = "nabosh@gmail.com";
  // console.log({ user });
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

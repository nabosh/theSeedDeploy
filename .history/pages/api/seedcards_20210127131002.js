import { useState, useEffect } from 'react';
import netlifyAuth from '../../netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget';

import { getSeedCards } from '../../utils/Fauna';

export default async function handler(req, res) {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  let [user, setUser] = useState(null);

  useEffect(() => {
    let isCurrent = true;
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user);
        setUser(user);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, []);

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

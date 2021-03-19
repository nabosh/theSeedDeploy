import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Head from 'next/head';
import Cards from '../components/SeedCard';
import useSWR from 'swr';
import Link from 'next/link';
import netlifyIdentity from 'netlify-identity-widget';
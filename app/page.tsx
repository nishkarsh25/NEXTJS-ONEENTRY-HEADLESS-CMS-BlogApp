import React from 'react'
import HeroSection from './(components)/HeroSection'
import Articles from './(components)/Articles'
import { defineOneEntry } from 'oneentry';


const Home = async() => {
  const { Pages } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

  
 
  
}



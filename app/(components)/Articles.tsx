import Link from 'next/link'
import React from 'react'
import Article from './Article'
import { defineOneEntry } from 'oneentry';



const Articles = async () => {
  const { Products } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

  
  

  
}


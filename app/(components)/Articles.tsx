import Link from 'next/link'
import React from 'react'
import Article from './Article'
import { defineOneEntry } from 'oneentry';



const Articles = async () => {
  const { Products } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

  const blogs = await Products.getProductsByPageId(2)
  

  return (
    <div className='flex flex-col gap-4 mx-auto max-w-6xl my-10'> 
        
    </div>
  )
}


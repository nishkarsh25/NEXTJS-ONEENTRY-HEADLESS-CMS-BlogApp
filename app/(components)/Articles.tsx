import Link from 'next/link'
import React from 'react'
import Article from './Article'
import { defineOneEntry } from 'oneentry';



const Articles = async () => {
  const { Products } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

  const blogs = await Products.getProductsByPageId(2)
  

  return (
    <div className='flex flex-col gap-4 mx-auto max-w-6xl my-10'> 
        <span className='font-bold underline my-5'>Recent Articles</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
               blogs && blogs.map((blog:any)=> <Link key={blog.id} href={`/blog/${blog.id}`}><Article blog={blog}/></Link>)
            }
        </div>
    </div>
  )
}


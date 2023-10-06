// 'use client'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Hero_Code from '@/components/hero/Hero_Code'

import Projects from '@/app/code/Projects'

export default function Code() {
    return(
        <>
            <body className="bg-white dark:bg-black -z-10">
                
                <Hero_Code />
                <Projects />

    
                    
            </body>
        </>
        
        
        
        
    )
}
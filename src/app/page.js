
import React from 'react'
import Bestproduct from './components/Bestproduct'
import Body from './components/Body'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Newimformation from './components/Newimformation'
import Service from './components/Service'
import Typeofproduct from './components/Typeofproduct'
import Wonderproduct from './components/Wonderproduct'
export default function page() {
  return (
   <main className='w-full font-myfont'>
    <Body/>
    <Wonderproduct/>
    <Typeofproduct/>
    <Bestproduct/>
    <Service/>
    <Brands/>
    <Newimformation/>
    <Contact/>
   </main>
  )
}

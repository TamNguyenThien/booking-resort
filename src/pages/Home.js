import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeatureRooms from '../components/FeatureRooms'
import { Link } from 'react-router-dom'
export default function Home () {
  return (
    <>
      <Hero>
        <Banner title='Luxurious rooms' subtitle='deluxe rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  )
}

import React from 'react'
import MediaCard from '../components/CardProduct/CardProduct'
import BasicSelect from '../components/Filter/Filter'
import ResponsiveAppBar from '../components/Navigation/Navigation'

export const Home = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <BasicSelect/>
    <MediaCard/>
    </>
  )
}

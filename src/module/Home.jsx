import React from 'react'
import MediaCard from '../components/CardProduct/CardProduct'
import CustomizedAccordions from '../components/Filter/Filter'
import ResponsiveAppBar from '../components/Navigation/Navigation'

export const Home = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <CustomizedAccordions/>
    <MediaCard/>
    </>
  )
}

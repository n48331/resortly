"use client"
import Container from './components/Container'
import Cards from './components/Home/Cards'
import Navbar from './components/common/Navbar/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Container>

  <div className="pt-20 md:pt-24 lg:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">

   <Cards/>
  </div>

  </Container>
    </>
  )
}

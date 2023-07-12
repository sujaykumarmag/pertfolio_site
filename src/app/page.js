import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import Bio from './cv/page'


export default function Home() {
  return (


    <div className="bg-white text-black ">
      <Header />
      <Bio />
      <Footer />

    </div>



  )
}

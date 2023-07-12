import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import Bio from './cv/page'
import Main from './home/main'


export default function Home() {
  return (


    <div className="bg-white text-black ">
      <Header />
      <Main />
      <Footer />

    </div>



  )
}

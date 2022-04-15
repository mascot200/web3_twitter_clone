import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Feeds  from "../components/home/Feeds"
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'

const style = {
  wrapper: `flex justify-center   select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}

const Home: NextPage = () => {
  return (
     <div className={style.wrapper}>
       <div className={style.content}>
            <SideBar />
            <Feeds />
            <Widgets />
       </div>
     </div>
  )
}

export default Home

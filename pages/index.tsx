import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'
import {GetServerSideProps } from "next"


const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone by Athul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className="grid grid-cols-9">
      
    <Sidebar/>

     
    <Feed/>

    <Widgets/>


   


    </main>

      
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
const tweets = await fetchTweets();

  return {
    props: {

    }
  }
}
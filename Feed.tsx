import React, { useState } from 'react'
import {RefreshIcon} from '@heroicons/react/outline'
import Tweetbox from './TweetBox'
import { Tweet } from '../typings'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../Utils/fetchTweets'
/*import Tweetbox from './Tweetbox'*/
import toast from 'react-hot-toast'

interface Props {
    tweets: Tweet[]
}

function Feed({tweets: tweetsProp}: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  

  const handleRefresh = async () => {
    const refreshToast= toast.loading('Refreshing...');

  const tweets = await fetchTweets();
  setTweets(tweets)

  toast.success('Feed Updated!', {
    id: refreshToast
  })

  }


    return <div className="col-span-7 max-h-screen overflow-scroll scrollbar-hide lg:col-span-5 border-x">
    <div className="flex items-center justify-between">
        
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon onClick={handleRefresh} className= "h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125 mr-5 mt-5"/>
        </div>
      <div>

   
        <Tweetbox setTweets={setTweets} />

      </div>
      {tweets.map((tweet) => (
        <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
    </div>
  
}

export default Feed
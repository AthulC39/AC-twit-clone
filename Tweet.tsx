
import React, { useEffect, useState } from 'react'
import { Comment, CommentBody, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/solid'
import { fetchComments } from '../Utils/fetchComments'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

interface Props{
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [commentBoxVisible, setCommentBoxVisible]= useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const { data: session} = useSession()

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments);
  }

  useEffect( () => {
    refreshComments();
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentToast = toast.loading('Posting Comment...')

    const comment: CommentBody = {
      comment: input,
      tweetId: tweet._id,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
    }

    const result = await fetch(`/api/addComment`, {
      body: JSON.stringify(comment),
      method: 'POST',
    })

    console.log('WOOHOO we made it', result)
    toast.success('Comment Posted!', {
      id: commentToast,
    })

    setInput('')
    setCommentBoxVisible(false)
    refreshComments()


  }

  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
      <div className='flex space-x-3'>
        <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} alt="" />

        <div>
        <div>
            <div className='flex item-center space-x-1'>
                <p className='mr-1 font-bold'>{tweet.username}</p>
                <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g,'').toLowerCase()}.</p>
                <TimeAgo
                className='text-sm text-gray-500'
                date={tweet._createdAt} />
            </div>
            <p>{tweet.text}</p>
            {tweet.image && (
              <img src={tweet.image} alt="" className='m-5 ml-0 max-h-60 rounded-lg object-cover shadow-xl'/>
            
            )}
            
        </div>

    </div>
    </div>
  

    <div className='flex justify-between mt-5'> 


      <div onClick={() => session && setCommentBoxVisible(!commentBoxVisible)} className='flex cursor-pointer items-center space-x-3 text-gray-400'>
        <ChatAlt2Icon  className='h-5 w-5'/>
        <p>{comments.length}</p>
      </div>

      <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
        <SwitchHorizontalIcon className='h-5 w-5'/>
      </div>       
      
      <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><HeartIcon className='h-5 w-5'/></div>

      <div className='flex cursor-pointer items-center space-x-3 text-gray-400'><UploadIcon className='h-5 w-5'/></div>

    </div>
    {commentBoxVisible && (
      <form onSubmit={handleSubmit} className='mt-3 flex space-x-3'>
          <input value={input} onChange={e => setInput(e.target.value)} className='rounded-lg flex-1 bg-gray-100 p-2 outline-none' type="text" placeholder="Write a comment..." />
          <button type='submit' disabled={!input} className='text-twitter disabled:text-gray-200 '>Post</button>
      </form>
    )}
    {comments?.length > 0 && (
      <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
        {comments.map(comment => (
          <div key={comment._id} className="flex space-x-2">
            <hr className='absolute left-5 top-10 h-8 border-x border-twitter/30' />
            <img src={comment.profileImg} className="h-7 mt-2 w-7 object-cover" alt=""
             />
            <div>
              <div className='flex items-center space-x-1'>
                <p className='mr-1 font-bold '>{comment.username}</p>
                <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g,'').toLowerCase()}.</p>
                <TimeAgo
              className='text-sm text-gray-500'
              date={comment._createdAt}
              />
              </div>
              <p>{comment.comment}</p>
            </div>
            
            </div>
    ))}
    </div>
    
  )}
  
  </div>
  )
}

export default Tweet
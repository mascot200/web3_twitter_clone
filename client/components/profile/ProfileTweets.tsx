import React from 'react'
import Post from '../Post'
import { format } from 'timeago.js'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: true,
      timestamp: '2022-02-01T12:00:00.000Z'
  },

  {
      displayName: 'Waya',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Hey men fs',
      isProfileImageNFT: true,
      timestamp: '2022-06-01T12:00:00.000Z'
  },

  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-02-01T12:00:00.000Z'
  },

  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-09-01T12:00:00.000Z'
  },

  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-02-01T12:00:00.000Z'
  },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post key={index}
              displayName={tweet.displayName} 
              userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`} 
              text={tweet.text}
              isProfileImageNFT={tweet.isProfileImageNFT}
              timestamp={tweet.timestamp}
              avatar={tweet.avatar}
              />
      ))}
    </div>
  )
}

export default ProfileTweets
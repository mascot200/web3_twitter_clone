import { useContext, useEffect } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
// import TweetBox from './TweetBox'
// import Post from '../Post'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-02-01T12:00:00:000Z'
  },

  {
      displayName: 'Waya',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Hey men fs',
      isProfileImageNFT: false,
      timestamp: '2022-02-01T12:00:00:000Z'
  },

  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-02-01T12:00:00:000Z'
  },

  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-09-01T12:00:00:000Z'
  },

  {
      displayName: 'Ubong',
      userName: '0x87767766d767dfdsvF76768svsv9mdjdgd',
      avatar: 'https://piedvest.s3.amazonaws.com/aboutus.jpg',
      text: 'Good morning burfs',
      isProfileImageNFT: false,
      timestamp: '2022-02-01T12:00:00:000Z'
  },
]


const Feeds = () => {
    return (
      <div className={style.wrapper}>
          <div className={style.header}>
              <div className={style.headerTitle}>Home</div>
              <BsStars />
          </div>
          <TweetBox />
           { tweets.map((tweet, index) => (
                <Post key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                avatar={tweet.avatar}
                text={tweet.text}
                isProfileImageNFT={tweet.isProfileImageNFT}
                timestamp={tweet.timestamp}
          
          />
           ))}
      </div>
    )
}

export default Feeds;
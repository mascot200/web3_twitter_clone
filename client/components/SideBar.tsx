import React, { useState } from 'react'
import { VscTwitter } from 'react-icons/vsc';
import SideBarOptions from './SideBarOptions';
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import Link from 'next/link';
import {
    BsBookmark,
    BsBookmarkFill,
    BsPerson,
    BsPersonFill,
  } from 'react-icons/bs'
  


const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
  }


const SideBar = ({ initialSelectedIcon = 'Home'}) => {
    const [selected, setSelected] = useState<String>(initialSelectedIcon)
 
    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>

            <div className={style.navContainer}>
                <SideBarOptions 
                  Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
                  text="Home"
                  isActive={Boolean(selected == 'Home')}
                  setSelected={setSelected}
                  redirect={'/'}
                />

                <SideBarOptions 
                  Icon={selected === 'Explore' ? FaHashtag : BiHash}
                  text="Explore"
                  isActive={Boolean(selected == 'Explore')}
                  setSelected={setSelected}
                  redirect={'/'}
                />

                <SideBarOptions 
                  Icon={selected === 'Notifications' ? FaBell : FiBell}
                  text="Notifications"
                  isActive={Boolean(selected == 'Notifications')}
                  setSelected={setSelected}
                  redirect={'/'}
                />

                <SideBarOptions 
                  Icon={selected === 'Messages' ? HiMail  : HiOutlineMail }
                  text="Messages"
                  isActive={Boolean(selected == 'Messages')}
                  setSelected={setSelected}
                  redirect={'/'}
                />

                <SideBarOptions 
                  Icon={selected === 'Bookmarks' ? HiMail  : HiOutlineMail }
                  text="Bookmarks"
                  isActive={Boolean(selected == 'Bookmarks')}
                  setSelected={setSelected}
                  redirect={'/'}
                />

               <SideBarOptions
                Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
                text='Lists'
                isActive={Boolean(selected === 'Lists')}
                setSelected={setSelected}
                redirect={'/'}
                />

              <SideBarOptions
                Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
                text='Profile'
                isActive={Boolean(selected === 'Profile')}
                setSelected={setSelected}
                redirect={'/profile'}
                />

               <SideBarOptions
                Icon={selected === 'More' ? CgMoreO : CgMoreO}
                text='More'
                isActive={Boolean(selected === 'More')}
                setSelected={setSelected}
                redirect={'/'}
                />
                <div className={style.tweetButton}>Mint</div>
            </div>

            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>ubong1</div>
                        <div className={style.handle}>@0x33...45</div>
                    </div>

                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
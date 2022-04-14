import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'

const style = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
}

interface SidebarOptionProps {
    text: String
    Icon: IconType
    isActive?: Boolean
    setSelected?: Dispatch<SetStateAction<String>>
    redirect?: URL | string
  }
  


const SideBarOptions = ({ text, Icon, isActive, setSelected, redirect}: SidebarOptionProps) => {
    const handleClick = (buttonText = text) => {
        if (buttonText !== 'More' && setSelected) {
          setSelected(buttonText)
        } else return
      }
        return (
            <div className={style.wrapper}
                onClick={() => { handleClick(text)}}
            >
                <div className={style.iconContainer}>
                    <Icon />
                </div>
                <div className={`${isActive ? style.textActive : style.textGeneral } `}>
                    {text}
                </div>
            </div>
        )
}

export default SideBarOptions;
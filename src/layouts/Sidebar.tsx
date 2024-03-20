import { ElementType } from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { BsCollectionPlay } from 'react-icons/bs'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { buttonStyles } from '../components/Button'
import { twMerge } from 'tailwind-merge'

export function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={HiOutlineHome} title="home" url="/" />
        <SmallSidebarItem
          Icon={AiOutlinePlayCircle}
          title="Shorts"
          url="/shorts"
        />
        <SmallSidebarItem
          Icon={BsCollectionPlay}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem
          Icon={AiOutlinePlaySquare}
          title="Library"
          url="/library"
        />
      </aside>
      <aside>
        
      </aside>
    </>
  )
}

type SmallSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
}

export function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-1',
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  )
}

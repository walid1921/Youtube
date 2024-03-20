import React, { Children, ElementType, useState } from 'react'
import { HiOutlineHome, HiChevronUp, HiChevronDown } from 'react-icons/hi'
import { BsCollectionPlay } from 'react-icons/bs'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { Button, buttonStyles } from '../components/Button'
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
      <aside className="w-56 lg:sticky hidden absolute top-0 overflow-y-auto scrollbar-hidden pb-4 lg:flex flex-col gap-2 px-2 ">
        <LargeSidebarSection title="hi" visibleItemCount={1}>
          <LargeSidebarItem
            isActive
            Icon={HiOutlineHome}
            title="home"
            url="/"
          />
          <LargeSidebarItem Icon={HiOutlineHome} title="home" url="/" />
        </LargeSidebarSection>
        <hr />
      </aside>
    </>
  )
}

//! SmallSidebarItem
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

//! LargeSidebarSection

type LargeSidebarSectionProps = {
  children: React.ReactNode
  title?: string
  visibleItemCount?: number
}
function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandedButton = childrenArray.length > visibleItemCount
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount)

  const ButtonIcon = isExpanded ? HiChevronUp : HiChevronDown

  return (
    <div className="flex flex-col gap-2">
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandedButton && (
        <Button
          variant="ghost"
          className={twMerge(
            buttonStyles({ variant: 'ghost' }),
            'w-full flex items-center rounded-lg gap-4 p-3',
          )}
          onClick={() => setIsExpanded(e => !e)}
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? 'Show less' : 'Show more'} </div>
        </Button>
      )}
    </div>
  )
}

//! LargeSidebarItem
type LargeSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
  isActive?: boolean
}

function LargeSidebarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? 'font-semibold hover:bg-secondary bg-neutral-100' : undefined}`,
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  )
}

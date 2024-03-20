import { useEffect, useRef, useState } from 'react'
import formatDuration from '../utils/formatDuration'
import formatTimeAgo from '../utils/formatTimeAgo'

type VideoItemProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailUrl: string
  videoUrl: string
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: 'compact',
  compactDisplay: 'short',
})

const VideoItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoItemProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current === null) return
    if (isVideoPlaying) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [isVideoPlaying])

  return (
    <div
      className="flex flex-col gap-2 w-[300px] flex-wrap"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] ease-in-out duration-200 ${isVideoPlaying ? 'rounded-none' : 'rounded-xl'} `}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          playsInline
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200  ${isVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0'}`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img src={channel.profileUrl} className="w-12 h-12 rounded-full" />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-semibold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            <span>{VIEW_FORMATTER.format(views)} views</span>
            <span> • </span>
            <span>{formatTimeAgo(postedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoItem

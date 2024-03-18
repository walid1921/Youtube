import formatDuration from "../utils/formatDuration"

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
  return (
    <div className="flex flex-col gap-2 w-[300px] flex-wrap">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
      <div></div>
    </div>
  )
}

export default VideoItem

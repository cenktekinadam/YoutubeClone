import { useContext } from "react"
import Sidebar from "../components/Sidebar"
import { VideoContext } from "../contex/videoContex"
import Loader from "../components/Loader"
import ErrorDisplay from "../components/ErrorDisplay"
import VideoCard from "../components/VideoCard"

const Feed = () => {

    const { videos, error, loading } = useContext(VideoContext)
    return (
        <div className="flex">
            <Sidebar />
            <div className="videos">{loading ? <Loader /> : error ? <ErrorDisplay error={error} /> : videos.map((item, i) => item.type === 'video' && <VideoCard video={item} key={i} />)}</div>
        </div>
    )
}

export default Feed

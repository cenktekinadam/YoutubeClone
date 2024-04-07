import { GrDislike, GrLike } from "react-icons/gr"


const ChannelInfo = ({ video }) => {
    return (

        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <img
                    className="rounded-full w-12 h-12"
                    src={video.channelThumbnail[0].url} alt="" />
                <div>
                    <h4 className="font-bold">{video.channelTitle}</h4>
                    <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white text-black px-3 h-6 text-center text-sm transition hover:bg-gray-400 rounded-full">Abone ol</button>
            </div>


            <div className="hidden items-center bg-darkgray rounded-full md:flex">
                <div className="py-2 cursor-pointer px-6 border-r">
                    <GrLike />
                </div>
                <div className="py-2 px-6 cursor-pointer">
                    <GrDislike />
                </div>
            </div>
        </div>

    )
}

export default ChannelInfo

import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
    const [expand, setExpand] = useState(true)

    const text = expand
        ? video.description.slice(0, 300) + '...daha fazla '
        :
        video.description

    return (
        <div onClick={() => setExpand(!expand)}
            className="bg-darkgray rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
            <div className="flex gap-4 mb-2">
                <p>{millify(video.viewCount)}</p>
                <p>{new Date(video.publishDate).toLocaleDateString(
                    'tr', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'

                }
                )}</p>
            </div>
            <div>{text.split('\n').map((line) => <span>
                {line}<br />
            </span>)}</div>
        </div>
    )
}

export default VideoInfo

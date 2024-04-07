import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../../utils/api";
import ReactPlayer from 'react-player'
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../components/VideoCard";
import Comments from "../../components/Comments";
import { data } from "autoprefixer";




const VideoDetail = () => {
    //*Video Detay ve commentsların statetini tuttuk
    const [video, setVideo] = useState(null)
    const [com, setCom] = useState(null)
    //* 1  ilk olarak arama paremetresine gönderdiğimiz Video idyi almalıyız Bunun için kurulum yapmamızlazım
    const [searchParams] = useSearchParams()
    //*  2 Urlden alcağımız idnin keyi "v" bu isimli parametreye erişmemiz lazım
    const id = searchParams.get('v')
    //*  İdsi Bilinen videonun Bilgilerini apidan çekmemiz Lazım
    useEffect(() => {
        api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

        api
            .get(`https://yt-api.p.rapidapi.com/comments?id=${id}`)
            .then((res) => setCom(res.data));
    }, [id]);
    console.log("yorum", com);
    console.log("Video", video);


    return (
        <div className="overflow-auto h-screen detail-page gap-10 ">
            <div>
                {/* Video içeriği */}
                <div className=" h-[50vh] lg:h-[70vh] overflow-hidden"><ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    controls={true} light={true}
                    width={'100%'} height={'100%'} />
                </div>

                {!video && <p>Yükleniyor</p>}
                {/* Başlık */}

                {video && <> <h1 className="my-3 text-xl font-bold">{video.title}</h1>
                    {/* kanal Bilgileri */}
                    <ChannelInfo video={video} />
                    {/* Video Bilgileri */}
                    <VideoInfo video={video} />
                    {/* Comments */}
                    <Comments data={com} />
                </>}
            </div>





            {/* Related videos */}
            <div className="flex flex-col gap-5 p-1 ">
                {video?.relatedVideos.data.map(
                    (item) => item.type === 'video' && (
                        <VideoCard key={video.videoId} video={item} isRow={true} />
                    )
                )}

            </div>
        </div>
    )
}

export default VideoDetail

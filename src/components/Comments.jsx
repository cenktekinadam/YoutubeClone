import { FaRegUserCircle } from "react-icons/fa";
import { GrDislike, GrLike } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io";

const Comments = ({ data }) => {

    return (
        <div className="bg-darkgray m7-5 flex flex-col ">
            <h1 className="font-bold text-lg ms-3">{data.commentsCount} Yorum</h1>
            <div className="m-2 ">
                <div className="flex p-4">
                    < FaRegUserCircle className="text-3xl" />
                    <input type="text" placeholder="Yorum ekleyin" className=" mx-7 mb-2 p-2  w-full border-b bg-transparent rounded" />
                </div>

                {data && data.data.map((i) =>
                    <div className=" flex gap-2 items-start py-4 px-1">
                        <img className="rounded-full " src={i.authorThumbnail[0].url} alt="" />


                        <div className="flex  flex-col gap-2">
                            <h5 className=" flex gap-2 items-center">
                                <span className="font-semibold">{i.authorText}</span>
                                <span className="text-sm text-gray-400">{i.publishedTimeText}</span>
                            </h5>
                            <p>{i.textDisplay}</p>

                            <div className="flex gap-3 items-center">
                                <div className="flex gap-2 text-blue-300 cursor-pointer hover:bg-gray-700 p-1 rounded">
                                    <GrLike />
                                    <span className="text-sm text-gray-400">{i.likesCount}</span>
                                </div>
                                <div className="cursor-pointer hover:bg-gray-700 p-1 rounded">
                                    <GrDislike className="text-red-600" />

                                </div>
                                <span className="text-amber-400 cursor-pointer hover:bg-gray-700 p-1 rounded">Yanıtla</span>
                            </div>
                            <div className="flex w-fit rounded items-center gap-2 text-blue-600 hover:bg-blue-200">{i.replyCount} {i.replyCount > 0 && <IoIosArrowDown />}Yanıt</div>
                        </div>
                    </div >
                )}

            </div>

        </div>
    )
}

export default Comments

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import api from "../utils/api";
import Sidebar from "../components/Sidebar"
import VideoCard from "../components/VideoCard";


const Results = () => {
    const [page, setPage] = useState(1);
    const [token, setToken] = useState();
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();

    //* Usesearch ile urlmize ulaşabilir hale getirdik 
    //* Get metogu ile keyi search query olan  url adresini aldık 
    const query = searchParams.get('search_query')
    //Ulaştığımız query keyli parametreye göre apidan veri çektik 
    useEffect(() => {
        const params = {
            query: query,
            //? eğerki sayfa değeri birden büyükse yeni yapılacak istekte 
            //?önceki isteğin tokenini ekleyerek bir sonraki sayfayanın verilerini alabiliyoruz
            token: page > 1 ? token : undefined,
        };
        api.get(`/search`, { params }).then((res) => {
            //*Arama sonucunun devamını sağlaması için token statine aktardık
            setToken(res.data.continuation)
            //*  Gelen videoları data stateine ekledik
            setData((prev) => prev.concat(res.data.data))
        })
    }, [query, page])




    return (
        <div className="flex gap-3  ">
            <Sidebar />

            <div className=" flex flex-col items-center w-full h-[90vh] overflow-auto p-4 ">
                <h2 className="text-xl mb-5">
                    <span className="font-bold">{query}</span>  İçin çıkan sonuçlar
                </h2>

                <div div className="flex flex-col gap-5 justify-center  ">
                    {data?.map((item) =>
                        item.type === 'video' && <VideoCard key={item.id} video={item} isBow={false} />
                    )}
                    <button
                        onClick={() => setPage(page + 1)}
                        className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition"
                    >
                        Daha Fazla
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Results

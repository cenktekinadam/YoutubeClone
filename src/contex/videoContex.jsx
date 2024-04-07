import { createContext, useEffect, useState } from "react";
import { categories } from "../constans";
import api from "../utils/api";

//* 1) Context Temelini oluştur
export const VideoContext = createContext();

//*  2)Sağlayıcı Bileşenini Oluşturur
export const VideoProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [videos, setVideos] = useState();
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const type = selectedCategory.type
        if (type === "menu") return;
        setIsLoading(true);
        const url = type === "home" ? "/home" : type === "trending" ? "/trending" : type === "category" ? `/search?query=${selectedCategory.name}` : "";
        api.get(url).then((res) => setVideos(res.data.data)).catch((err) => setError(err.message)).finally(() => setIsLoading(false))
    }, [selectedCategory])

    return <VideoContext.Provider value={{ setSelectedCategory, selectedCategory, videos, loading, error, videos }}>
        {children}
    </VideoContext.Provider>
}
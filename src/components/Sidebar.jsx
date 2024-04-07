import { useContext } from "react"
import { categories } from "../constans"
import { VideoContext } from '../contex/videoContex.jsx'
const Sidebar = () => {
    const { setSelectedCategory, selectedCategory } = useContext(VideoContext)

    return (
        <div className="flex flex-col p-1 md:p-4">
            {categories.map((item, i) => (
                <div style={{ background: selectedCategory.name == item.name && '#2d2d2d' }} onClick={() => setSelectedCategory(item)} key={i}>
                    <div className="flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#808080be]">
                        <span className="max-sm:text-2xl">{item.icon}</span>
                        <span className="max-sm:hidden">{item.name}</span>
                    </div>
                    {item.divider && <hr />}
                </div>
            ))}
        </div>
    )
}

export default Sidebar

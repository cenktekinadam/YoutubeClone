import { FaRegUserCircle } from "react-icons/fa";

const Loader = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]
    return arr.map(() => (
        <div role="status" className=" p-4  rounded shadow animate-pulse md:p-6 border-gray-700">
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-700">

            </div>
            <div className="flex items-center mt-4 gap-3">
                <FaRegUserCircle className="text-5xl text-gray-400" />

                <div>
                    <div className="h-2.5  rounded-full bg-gray-700 w-56 mb-2"></div>
                    <div className="w-16 h-2  rounded-full bg-gray-700 mb-2"></div>
                    <div className="flex gap-2">
                        <div className="w-16 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-16 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default Loader

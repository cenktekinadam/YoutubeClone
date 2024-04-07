
const ErrorDisplay = ({ hata }) => {
    console.log(hata);
    return (
        <div className=" flex flex-col bg-red-500 h-fit text-center gap-3 rounded p-4">
            <h2>Üzgünüz Hata oluştu Daha sonra Tekrar deneyiniz</h2>
            <span className="font-semibold">{hata}</span>
        </div>

    )
}

export default ErrorDisplay

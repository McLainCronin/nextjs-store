export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center pt-80 space-y-4">
            <div>
                <i className="fas fa-gear fa-spin text-white text-2xl"></i>
            </div>
            <div className="text-white text-sm">
                Loading...
            </div>
        </div>
    )
}
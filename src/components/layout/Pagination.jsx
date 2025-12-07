const Pagination = () => {
    return <>
        <div className="flex justify-center my-4">
            <button className="mx-1 px-3 py-1 border bg-gray-200">Previous</button>
            {[1,2,3,4,5].map((page) => (
                <button key={page} className="mx-1 px-3 py-1 border bg-white">{page}</button>
            ))}
            <button className="mx-1 px-3 py-1 border bg-gray-200">Next</button>
        </div>
    </>
}
export default Pagination;
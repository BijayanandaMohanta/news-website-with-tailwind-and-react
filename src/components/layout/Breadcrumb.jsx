const Breadcrumb = ({ title }) => {
    return <>
        <div className="relative overflow-hidden">
            <img src="https://placehold.co/1200x300" className="object-fit mb-0" alt="Breadcrumb image" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">{title}</h1>
            </div>
        </div>
    </>
}
export default Breadcrumb;
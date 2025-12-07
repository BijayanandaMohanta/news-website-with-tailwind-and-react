const Commentbox = () => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Comments</h2>
            <div>
                <input type="text" className="w-full border rounded p-2 mb-2" placeholder="Your Name" />
                <input type="email" className="w-full border rounded p-2 mb-2" placeholder="Your Email" />
                <textarea className="w-full border rounded p-2" rows="4" placeholder="Write your comment here..."></textarea>
                <button className="mt-2 bg-blue-500 text-white px-4 float-right py-2 rounded">Submit your comment</button>
            </div>
        </div>
    )
}
export default Commentbox;
function COURSES ({image, button, describtion, name, Money}) {
    return <div className="ml-[6%]">
        <div>
            <h1>Courses</h1>
        </div>
        <div className="bg-white rounded shadow-2xl sm:w-[400px]  w-[330px] h-[500px]">
            <img src={image}  />
            <div className="pl-3  mt-2">
            <button className="bg-green-500 px-4 py-2 rounded-full text-white my-2">{button}</button>
            <p className="py-2">{describtion} <br /> </p>
            <p className="font-semibold text-gray-400 py-2">{name}</p>
            <a className="font-bold text-[#00674C]" href="">{Money}</a>
            </div>

        </div>
    </div>
}
export default COURSES
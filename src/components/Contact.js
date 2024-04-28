
//rafc is a shortcut to auto generate component and export it
const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl mt-5 p-5">Contact Us</h1>
            <h3 className="font-bold text-xl">Email : xyzabc@gmail.com</h3>
            <h3 className="font-bold text-xl">Contact : 9876543210</h3>
            <form className="flex flex-col items-center ">
                <input type="text" placeholder="Name" className="border border-black m-3 w-2/12"></input>
                <input type="text" placeholder="Message" className="border border-black m-3 w-2/12"></input>
                <button className="bg-gray-200 font-bold p-2 rounded-xl border border-black">Submit</button>
            </form>
           
        </div>
    )
};

export default Contact;
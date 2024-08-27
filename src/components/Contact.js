const Contact = () => {
  return (
    <div className="relative left-1/3 bg-pink-100 w-4/12 p-4 mt-4">
      <h1 className="font-extrabold text-3xl p-4 m-4">This is my Contact Page</h1>
      <form className="text-left">
        <label className="font-semibold mx-4">Name </label>
        <input type="text" placeholder="enter your name" className="border border-black p-2 m-2"></input>
        <br/>
        <label className="font-semibold mx-4">Message </label>
        <input type="text" placeholder="enter your message" className="border border-black p-2 m-2"></input>
        <br/>
        <button className="border border-black bg-gray-200 p-2 text-center font-semibold rounded-lg ml-60">Submit</button>
      </form>
    </div>
  )
}

export default Contact;

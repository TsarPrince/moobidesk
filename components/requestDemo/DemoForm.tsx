import GeneralButton from "../GeneralButton";


const DemoForm = () => {
  return (
    <form className="p-8 mb-12 bg-tertiary-dark-blue max-w-lg rounded text-white flex text-sm flex-col gap-4">
      <h1 className="text-xl mb-2 ">Just Fill out the form to get things going. Let’s do this</h1>
    
      <div className="flex flex-col gap-2">
        <label>Full name</label>
        <input
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="full_name"
          placeholder="John Doe"
          name="full_name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Company</label>
        <input
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="full_name"
          placeholder="John Doe"
          name="full_name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Email</label>
        <input
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="email"
          id="full_name"
          placeholder="John Doe"
          name="full_name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Choose Plan</label>
        <select className="border-none text-sm bg-tertiary-dark rounded">
          <option>Moobidesk Standard</option>
          <option>Moobidesk Enterprise</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label>Note</label>
        <input
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="full_name"
          placeholder="John Doe"
          name="full_name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Phone Number</label>
        <input
          className="border-none bg-tertiary-dark rounded focus:border-tertiary-dark px-4 py-2 "
          type="text"
          id="full_name"
          placeholder="John Doe"
          name="full_name"
        />
      </div>
      <GeneralButton>SUBMIT</GeneralButton>
    </form>
  )
}

export default DemoForm;
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>

      <form className="flex flex-col gap-4">
        <input type="text" name="username" id="username" placeholder="username" className="border p-3 rounded-lg"  />
        <input type="email" name="email" id="email"  placeholder="email" className="border p-3 rounded-lg"/>
        <input type="password" name="password" id="password" placeholder="password" className="border p-3 rounded-lg"/>
        <button type="submit" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disableb:opacity-80">
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}



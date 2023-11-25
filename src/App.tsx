import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignUp"
import Profile from "./pages/Profile"
import { About } from "./pages/About"




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/rofile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}


/*

  Tailwind.config.js
  This is basically is going to check the index.html file, and also all the files with these extensions inside this folder, source folder. ANd any classes I add, any tailwind CSS class I add is going to be detected and then the CSS equivalent of that is going to be created.

  console log ninja -> It's for console log inside of the visual studio

  My server is going to run inside this URL: http://localhost:5173 I can change the host on package .json  

  git init
  git add.
  gitcommit -m "install react js and tailwind css and create the first template"
  Now you can go to https://github.com/ and create a new repository.
  git remote add origin git@github.com:moabdev/mern-state.git
  git branch -M main
  git push -u origin main























*/
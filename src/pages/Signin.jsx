import { Quote } from "../components/Auth/Quote"
import { Auth } from "../components/Auth/Auth"

export  function Signin(){
    return <div className="grid grid-cols-2 justify-stretch">
       <div><Auth type="signin" /></div>
       <div className="bg-slate-200 h-screen flex justify-center invisible md:visible "><Quote/></div>
    </div>
  }
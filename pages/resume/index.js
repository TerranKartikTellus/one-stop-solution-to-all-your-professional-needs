import ResumePage from "/components/resume/templates/blueWhite/blueWhite"
import HeadTag from "../../components/common/head";
import {auth,googleAuthProvider} from "/lib/firebase/firebase";
export default function ResumePageMain(){
  return(
    <div className="w-full h-full bg-blue-600">
        <HeadTag title="Resume | Venda " cardTitle="Build your Resume, Cover Letter Today" description="One Stop solution to all your professional needs"></HeadTag>      
        <div className="hidden md:block">
        <ResumePage></ResumePage>
        </div>
        <div className="md:hidden block h-full">
        <SmallResumePage></SmallResumePage>
        </div>
        
    </div>
  );
}

function SmallResumePage(){
  return(
    <div className="bg-red400 px-3 h-full overflow-hidden">
      <div className="h-1/6 bggreen-400 pt-5"> logo</div>
      <div className="h-2/6 ">
        <div  className="text-2xl text-slate-50/95">Build your brand-new job ready Resume in minutes </div>
        <div className="text-base font-normal text-gray-100/80 font-sans ">Only 3% of resume make it past the first round.</div>
        <div className="h-auto bg-red400 flex flex-row items-end justify-center" >
          <button  onClick={signInWithGoogle}   className="mx-auto sm:scale-100 mt-14 hover:opacity-95 bg-gray-50  p-2 text-center text-blue-600 sm:text-xl text-2xl group ">Get Started<p className=" group-hover:opacity-100 hidden hover:block opacity-0 transition-all duration-1000 ease-in-out translate-x-3 group-hover:translate-x-0 pl-2"> Now</p></button>
        </div>
      </div>

      <div className="h-3/6 px-5 bg-blue-600">
        <img src="/img/2.jpg" className="opacity-95 rounded object-cover "></img>
      </div>
    </div>
  );
}
const signInWithGoogle = async () => {
await auth.signInWithPopup(googleAuthProvider)
    .then((response)=>{
          // setMessage("Success");
          // const {user,username} = useContext(UserContext);
          console.log(response);
          console.log(response.user.uid);
          window.location.replace(`/resume/${response.user.uid}`);

    })
    .catch((e)=>{
          // setMessage("Fail",e);
          console.log('error login',e);
    });          
};

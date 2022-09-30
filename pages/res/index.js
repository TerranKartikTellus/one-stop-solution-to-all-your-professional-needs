import Face from "/components/resume/templates/type1/components/Face"
import Bottom from "/components/resume/templates/type1/components/Bottom";
import { useState } from "react";
import {frontData, backData} from "/components/resume/defaultData"

export default  function Res(){
  const [toggleMenu, setMenu] = useState();
  return(
    <main className="font-sans  overflow-hidden relative h-screen flex flex-row items-start justify-center p-10 bg-blue-600">
      <div className="bg-red500 h-full w-1/2 p-2 rounded  z-50 bggray-900/40  flex flex-col items-start justify-start">
      {toggleMenu}
      </div>
      <div className="bg-red500 h- rotate-6 w-1/2  translate-y48 scale-90 select-none  ">
        <Resume frontData={frontData} backData={backData}></Resume>
      </div>
    </main>
  );
}
function Resume({frontData,backData}){
  return(
    <div className="w-[1000px] h-full bg-slate-50 shadow-2xl drop-shadow-2xl px-20 py-20 ">
      <div className="h-full">
        <Face image={frontData.image} name={frontData.name} jobTitle={frontData.jobTitle}></Face>
      </div>
      <div>
        <Bottom summary={backData.summary} 
                dob={backData.dob}
                nationality={backData.nationality}
                address={backData.address}
                contactEmail={backData.contactEmail}
                contactLinkdin={backData.contactLinkdin}
                contactWebsite={backData.contactWebsite}
                contactGithub={backData.contactGithub}
                contactWebsiteLink={backData.contactWebsiteLink}
                education={backData.education}
                WorkExperienceData={backData.WorkExperienceData} 
                ProfessionalSkill={backData.ProfessionalSkill}
                PersonalSkillData={backData.PersonalSkillData}
                language={backData.language}
                ></Bottom>
      </div>
    </div>
  );
}


// function GetStarted(){

// const [message, setMessage] = useState("");

// const signInWithGoogle = async () => {
// await auth.signInWithPopup(googleAuthProvider)
//     .then((response)=>{
//           setMessage("Success");
//           // const {user,username} = useContext(UserContext);
//           console.log(response);
//           console.log(response.user.uid);
//           window.location.replace(`/tools/resume/${response.user.uid}`);

//     })
//     .catch((e)=>{
//           setMessage("Fail",e);
//           console.log('error login',e);
//     });          
// };


//   return(
//     <div className="bg-gray-800/40 rounded blu h-5/6  sm:p-0  sm:bg-transparent p-10 sm:pt-20 space-y3  font-normal absolute top-auto font-sans left-20 text-white">
//        {/* <Logo></Logo> */}
//        <div className="text-3xl pt-20 sm:w-full w-[270px] ">
//         Only 3% of resume make it past the first round.
//        </div>
//        <div className="pt-5  sm:w-[500px] w-[270px] text-xl font-normal  font-sans  text-black invert">
//         Build your brand-new job ready Resume in minutes 
//        </div><br></br>
//        <div className="sm:w-full w-[270px]" >
//         <ul className="list-disc  pl-5 text-gray-100/90">
//           <li>Edit easily</li>
//           <li>High fedility template</li>
//           <li>Export as PDF or PNG</li> 
//         </ul>
//        </div>
//       <button  onClick={signInWithGoogle}   className=" sm:scale-100 mt-10 hover:opacity-95 bg-gray-50  p-2 text-center text-blue-600 sm:text-3xl text-2xl group ">Get Started<p className=" group-hover:opacity-100 hidden hover:block opacity-0 transition-all duration-1000 ease-in-out translate-x-3 group-hover:translate-x-0 pl-2"> Now</p></button>
  
//       </div>
//   );
// }


import Face from "/components/resume/templates/blueWhite/subComponents/Face"
import Bottom from "/components/resume/templates/blueWhite/subComponents/Bottom";
import Link from "next/link";
import { useState } from "react";

import {auth,googleAuthProvider} from "/lib/firebase/firebase";
import { useContext } from "react";
import { UserContext } from "/lib/firebase/userContext";

import {NameTitleImg,restData} from "/lib/data/resume/default";
export default function ResumePage(){
  const {user,username} = useContext(UserContext);
  // console.log(user);
  
      if(user && username){
            window.location.replace(`/tools/resume/${username}`);
      }

  
const [toggleMenu, setMenu] = useState(<GetStarted></GetStarted>);
return(
    <main className="font-sans overflowhidden relative h-screen flex flex-row items-start justify-center p-10 bg-blue-600">
      <div className="bg-red500 h-full w-1/2 p-2 rounded  z-50 bggray-900/40  flex flex-col items-start justify-start">
      {toggleMenu}
      </div>
      <div className="bg-red500 h- rotate-6 w-1/2  translate-y48 scale-90 select-none  ">
        <Resume NameTitleImg={NameTitleImg} restData={restData}></Resume>
      </div>
    </main>
  );
}

function GetStarted(){

const [message, setMessage] = useState("");

const signInWithGoogle = async () => {
await auth.signInWithPopup(googleAuthProvider)
    .then((response)=>{
          setMessage("Success");
          // const {user,username} = useContext(UserContext);
          console.log(response);
          console.log(response.user.uid);
          window.location.replace(`/tools/resume/${response.user.uid}`);

    })
    .catch((e)=>{
          setMessage("Fail",e);
          console.log('error login',e);
    });          
};


  return(
    <div className="bg-gray-800/40 rounded blu h-5/6  sm:p-0  sm:bg-transparent p-10 sm:pt-20 space-y3  font-normal absolute top-auto font-sans left-20 text-white">
       <Logo></Logo>
       <div className="text-3xl pt-20 sm:w-full w-[270px] ">
        Only 3% of resume make it past the first round.
       </div>
       <div className="pt-5  sm:w-[500px] w-[270px] text-xl font-normal  font-sans  text-black invert">
        Build your brand-new job ready Resume in minutes 
       </div><br></br>
       <div className="sm:w-full w-[270px]" >
        <ul className="list-disc  pl-5 text-gray-100/90">
          <li>Edit easily</li>
          <li>High fedility template</li>
          <li>Export as PDF or PNG</li> 
        </ul>
       </div>
      <button  onClick={signInWithGoogle}   className=" sm:scale-100 mt-10 hover:opacity-95 bg-gray-50  p-2 text-center text-blue-600 sm:text-3xl text-2xl group ">Get Started<p className=" group-hover:opacity-100 hidden hover:block opacity-0 transition-all duration-1000 ease-in-out translate-x-3 group-hover:translate-x-0 pl-2"> Now</p></button>
  
      </div>
  );

}
function Resume({NameTitleImg,restData}){
  return(
    <div className="w-[1000px] h-full bg-slate-50 shadow-2xl drop-shadow-2xl px-20 py-20 ">
      <div className="h-full">
        <Face image={NameTitleImg.image} name={NameTitleImg.name} jobTitle={NameTitleImg.jobTitle}></Face>
      </div>
      <div>
        <Bottom summary={restData.summary} 
                dob={restData.dob}
                nationality={restData.nationality}
                address={restData.address}
                contactEmail={restData.contactEmail}
                contactLinkdin={restData.contactLinkdin}
                contactWebsite={restData.contactWebsite}
                contactGithub={restData.contactGithub}
                contactWebsiteLink={restData.contactWebsiteLink}
                education={restData.education}
                WorkExperienceData={restData.workExperience} 
                ProfessionalSkill={restData.professionalSkills}
                PersonalSkillData={restData.personalSkills}
                language={restData.language}
                ></Bottom>
      </div>
    </div>
  );
}


function Logo(){
  return(
    <div className="">
     <Link href="/">
     <a className=" w-full h-full bg-blue300 mx-auto flex flex-row  items-start justify-start sm:justify-center sm:items-center">
                        <svg className="w-12 h-12 invert" width="500" height="500" viewBox="0 0 500 500" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4:2)">
                        <path d="M250 452L33.4937 77L466.506 77L250 452Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4:2">
                        <rect width="500" height="500" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        {/* <div className="bg-red-0 w-[200px] font-medium -translate-x-32 -translate-y-10 text-2xl ">
                            <div className="w-[200px]">Terran Kartik Tellus</div>
                        </div> */}
    </a>
    </Link>
    </div>
  );
}
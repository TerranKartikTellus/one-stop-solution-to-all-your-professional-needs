import Link from "next/link";
import PersonalSkills from "./PersonalSkills";
import LanguageList from "./LanguageList";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import ProfessionalSkills from "./ProfessionalSkills";
import { lang } from "moment";

export default function Bottom({summary,dob,nationality,address,contactWebsiteLink,contactWebsite,contactEmail,contactGithub,contactLinkdin,education,WorkExperienceData,ProfessionalSkill,PersonalSkillData,language}){
  // name = name.toUpperCase()
  
  return(
  <div className="flex flex-row items-start justify-start py-5 font-sans">
    <div className="w-4/12 b-red-300 pr-10 pl-2"><Left 
                                summary={summary} 
                                dob={dob} 
                                nationality={nationality}
                                address={address}
                                contactEmail={contactEmail}
                                contactLinkdin={contactLinkdin}
                                contactGithub={contactGithub}
                                contactWebsite={contactWebsite}
                                contactWebsiteLink={contactWebsiteLink}
                                ></Left></div>
    <div className="w-8/12 b-red-400 px">
          <Right
            education={education}
            WorkExperienceData={WorkExperienceData}
            ProfessionalSkill={ProfessionalSkill}
            PersonalSkillData={PersonalSkillData}
            language={language}
            >
          </Right>
    </div>
  </div>);
}
function Left({summary,dob,nationality,address,contactEmail,contactLinkdin,contactWebsite,contactWebsiteLink,contactGithub}){
  return(
    <div className="space-y-6 ">
      <div className="space-y-2">
        <div className="text font-sans font-medium text-black/95 capitalize ">SUMMARY</div>
        <div className="text-xs text-black/80  g-red-400">{summary}</div>
      </div>
      <div className="space-y-2">
        <div className="text font-sans font-medium text-black/95">PERSONAL DETAILS</div>
         
         <div className="space-y-1">
          <div className="text-sm font-sans font-semibold text-blue-700">Birth Date</div>
          <div className="text-black/90 text-xs">{dob}</div>
         </div>

          <div className="space-y-1">
          <div className="text-sm font-sans font-semibold text-blue-700 capitalize">Nationality</div>
          <div className="text-black/90 text-xs">{nationality}</div>
         </div>

         <div className="space-y-1">
          <div className="text-sm font-sans font-semibold text-blue-700 capitalize">Address</div>
          <div className="text-black/90 text-xs">{address}</div>
         </div>
      </div>
      <div className="space-y-2">
        <div className="text font-sans font-medium text-black/95">CONTACT</div>
        <div className="flex flex-row items-center justify-start space-x-2">
          <div><svg className="w-5 h-5 fill-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg></div>
          <div className="text-xs text-black/80 "><Link href={"mailto:"+contactEmail}><a className="hover:text-black" target="_blank">{contactEmail}</a></Link></div>
        </div>

        <div className="flex flex-row items-center justify-start space-x-2">
          <div><svg className="w-5 h-5 fill-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></div>
          <div className="text-xs text-black/80 "><Link href={`https://www.linkedin.com/in/${contactLinkdin}/`}><a className="hover:text-black" target="_blank">/in/{contactLinkdin}</a></Link></div>
        </div>

        <div className="flex flex-row items-center justify-start space-x-2">
          <div><svg className="w-5 h-5 fill-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg></div>
          <div className="text-xs text-black/80 "><Link href={"https://github.com/"+contactGithub}><a className="hover:text-black" target="_blank">{contactGithub}</a></Link> </div>
        </div>
        
        <div className="flex flex-row items-center justify-start space-x-2">
          <div><svg className="w-5 h-5 fill-blue-700" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"/></svg></div>
          <div className="text-xs text-black/80 "><Link href={contactWebsiteLink}><a className="hover:text-black" target="_blank">{contactWebsite}</a></Link></div>
        </div>
        
        
      </div>
      
    </div>
  );
}

function Right({education,WorkExperienceData,ProfessionalSkill:one,PersonalSkillData,language}){

  return(
    <div className="space-y-10">
      <div>
        <div className="text font-sans font-medium text-black/95">WORK EXPERIENCE</div>
        <div className="pt-2">  <WorkExperience data={WorkExperienceData}></WorkExperience> </div>
      </div>
      <div>
        <div className="text font-sans font-medium text-black/95">EDUCATION</div>
        <div className="pt-2"><Education   data={education}> </Education>  </div>
      </div>
      <div>
        <div className="text font-sans font-medium text-black/95">PROFESSIONAL SKILLS</div>
        <div className="pt-2">
          <ProfessionalSkills one={one}></ProfessionalSkills>
         </div>
      </div>
      <div className="flex flex-row items-start justify-start">
        <div className="w-1/2">
        <div className="text font-sans font-medium text-black/95">PERSONAL SKILLS</div>
        <div className="pt-3"><PersonalSkills data={PersonalSkillData}></PersonalSkills></div>
        </div>
        <div className="w-1/2">
        <div className="text font-sans font-medium text-black/95">LANGUAGES</div>
        <div className="pt-3 "><LanguageList item={language}></LanguageList></div>
        </div>
      </div>
    </div>
  );
}

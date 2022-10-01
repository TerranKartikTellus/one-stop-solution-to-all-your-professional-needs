import Face from "/components/resume/templates/blueWhite/subComponents/Face"
import Bottom from "/components/resume/templates/blueWhite/subComponents/Bottom";

export default function Resume({NameTitleImg,restData}){
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
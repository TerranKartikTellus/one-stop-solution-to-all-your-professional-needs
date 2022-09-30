import ResumePage from "/components/resume/templates/blueWhite/blueWhite"
import HeadTag from "../../components/common/head";

export default function ResumePageMain(){
  return(
    <div className="w-full h-full overflow-hidden">
        <HeadTag title="Resume | Venda " cardTitle="Build your Resume, Cover Letter Today" description="One Stop solution to all your professional needs"></HeadTag>      
        <ResumePage></ResumePage>
    </div>
  );
}

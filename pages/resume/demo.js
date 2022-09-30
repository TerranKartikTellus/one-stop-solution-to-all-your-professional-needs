import Resume from "../../components/resume/templates/blueWhite";
import { restData,NameTitleImg } from "../../lib/data/resume/default";


export default function ResumePage(){
  return(
    <div className="fn bg-yellow500 h-screen rounded-sm flex flex-col items-center justify-center font-inter-100">
       {/* <Resume NameTitleImg={NameTitleImg} restData={restData}></Resume> */}
    </div>
  );
}

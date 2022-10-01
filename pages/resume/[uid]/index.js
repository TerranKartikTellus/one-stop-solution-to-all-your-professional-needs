import { useRouter } from "next/router";
import toast,{ Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "/lib/firebase/userContext";
import Resume from "../../../components/resume/templates/blueWhite/resume";
import {NameTitleImg,restData} from "/lib/data/resume/default";
import Step from "/components/common/formStep"

export default function usernameResume(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { uid } = router.query
  if(uid) toast.success(uid,{duration: 5000,});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {user , username} = useContext(UserContext);
  console.log(user,username);
  return (
    <div className="h-screen overflow-hidden">
      <FormPreview></FormPreview>
    </div>
  );
}
function FormPreview(){
const [NameTitleImg1,setNameTitleImg] = useState(NameTitleImg);
const [restData1,setRestData] = useState(restData);
const [resumeStyle,setReumeStyle] = useState("translate-y-1/4 -rotate-");

const [form,setForm] = useState(<Form1></Form1>);
const [count,setCount] = useState(1);

function goNext(){
  if(count==1){
    setCount(count+1);
    setForm(<Form2></Form2>);
  }else if(count==2){
    setCount(count+1);
    setForm(<Form3></Form3>);
  }else if(count==3){
    setCount(count+1);
    setForm(<Form4></Form4>);
  }else if(count==4){
    setCount(count+1);
    setForm(<Form5></Form5>);
  }
}
function goBack(){
  if(count==2){
    setCount(count-1);
    setForm(<Form1></Form1>);
  }else if(count==3){
    setCount(count-1);
    setForm(<Form2></Form2>);
  }else if(count==4){
    setCount(count-1);
    setForm(<Form3></Form3>);
  }else if(count==5){
    setCount(count-1);
    setForm(<Form4></Form4>);
  }
}
return(
    <div className="h-full flex flex-row items-center justify-start ">
      <div className="h-full w-1/2 pl-5 py-10">
        <div className="h-1/6 flex flex-col items-center justify-end bggreen-600">
          <div className="h bgred-400 w-full h-auto">x</div>
          <div className="bgyellow-400 h-[30px] w-full flex flex-row items-center justify-center mx-auto"><Step count={count} maxCount={5}></Step></div>
        </div>
        <div className=" h-4/6">
          {form}
        </div>
        <div className="h-1/6 flex flex-row items-center justify-center">
          {count != 1 && <div><button onClick={goBack}>Back</button></div>}
          {count != 5 && <div><button onClick={goNext}>Next</button></div>}
        </div>
      </div>
      <div className="w-1/2">
        <div className={"transition-all duration-200 ease-in-out "+resumeStyle}>
          <Resume NameTitleImg={NameTitleImg1} restData={restData1}></Resume>
        </div>
      </div>
    </div>
  );
}
function Form1({setForm}){
  return(
    <div className="bg-red400 h-full flex flex flex-col items-center justify-between">
      <div className="h- bg-yellow-700">
        <div>name</div>
        <div>title</div>
        <div>image</div>
        <div>summary</div>
      </div>
      
    </div>
  );
}

function Form2({gotoNextForm,gotoPrevForm}){
  return(
    <div className="bg-red400 h-full  flex flex-col items-center justify-between">
      <div className="h- bg-yellow-700">
        <div>DOB</div>
        <div>Nationality</div>
        <div>Address</div>
        <div>email</div>
        <div>linkdin</div>
        <div>email</div>
        
      </div>
     
    </div>
  );
}

function Form3({gotoNextForm,gotoPrevForm}){
  return(
    <div className="bg-red400 h-full  flex flex-col items-center justify-between">
      <div className="h- bg-yellow-700">
        <div>Work Experience</div>
        
        
      </div>
      
    </div>
  );
}
function Form4({gotoNextForm,gotoPrevForm}){
  return(
    <div className="bg-red400 h-full  flex flex-col items-center justify-between">
      <div className="h- bg-yellow-700">
        <div>Education</div>
        
        
      </div>
     
    </div>
  );
}
function Form5({gotoPrevForm}){
  return(
    <div className="bg-red400 h-full flex flex flex-col items-center justify-between">
      <div className="h- bg-yellow-700">
        <div>Professional Skill</div>
        <div>Personal Skills</div>
        <div>Language</div>
        
        
      </div>
    </div>
  );
}
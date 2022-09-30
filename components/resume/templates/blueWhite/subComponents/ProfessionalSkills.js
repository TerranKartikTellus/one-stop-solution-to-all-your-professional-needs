import Pie from "./PercentageCircle";

export default function ProfessionalSkills({one}){
  return(
    <div className="bg-re-400">
       { <PieBase one={one}></PieBase> }
       {/* { <Circle></Circle> } */}
    </div>
  );
}
function PieBase({one}){
  // one = one.reverse();
  // console.log(one);
  // const two = ['C++', 'Solidity', 'Figma' ];

  return(
     <div className="bg-green500 w-full  text-gry-700 text-xs font-sans text- bg-red400   trackin">
        { one.map(i=>( 
         
          <p key={i} className="inline-block p-2 m-2 tracking odd:bg-blue-700/80 odd:text-gray-100 bg-gray-200/40 rounded-l-full rounded-r-full ">{i}</p> 
        
        )) }
     </div> 
    
    // <div className="grid grid-cols-2 gap-4">
    //   <div className="flex flex-col items-start justify-start bg-red400 bg-gray-20 font-medium"> <div className=" w-full mx-auto">
    //     {/* <Pie percentage={98} colour="blue" /> */}
    //   </div>
     
    //   <div className="flex flex-col items-start justify-start bg-red400 bg-gray-20 font-medium"> <div className=" w-full mx-auto">
    //     {/* <Pie percentage={88} colour="blue" /> */}
    //   </div>
    //   <div className="bg-green500 w-full  text-gry-700 text-xs font-Inter text- bg-red400   trackin">
    //     {/* { two.map(i=>( <p className="inline-block p-2 m-2 odd:bg-blue-700/80 odd:text-gray-100 bg-gray-200/40 rounded-l-full rounded-r-full ">{i}</p> )) } */}
    //     </div> 
    //   </div>
    // </div>
  );
}
function ListBase(){
  return(
    <div>
list
    </div>
  );
}


function Circle(){
  return(
    <div className="w-44 h-44">
      <svg className="w-full" height="20" width="20" viewBox="0 0 20 20">
        <circle r="10" cx="10" cy="10" fill="white" />
        <circle r="5" cx="10" cy="10" fill="transparent"
                stroke="tomato"
                stroke-width="10"
                stroke-dasharray="calc(35 * 31.4 / 100) 31.4"
                transform="rotate(-90) translate(-20)" />
      </svg>
    </div>
  );
}
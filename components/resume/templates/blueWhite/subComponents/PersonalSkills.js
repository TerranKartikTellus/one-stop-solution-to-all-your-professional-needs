
export default function PersonalSkills({ data }){
  
  return(
    <div className="space-y-2 ">
      
     { 
      data.map(i=>(
      <div key={i} className="flex flex-row items-start justify-start space-x-5 text-xs">
        <div className="flex flex-row items-center justify-center h-[20px]">
          {i[1]<=1 && <Level1></Level1>}
          {i[1]==2 && <Level2></Level2>}
          {i[1]==3 && <Level3></Level3>}
          {i[1]==4 && <Level4></Level4>}
        </div>
        <div className="font-sans tracking-wide text-black font-medium capitalize">{i[0]}</div>
      </div>
      ))
     }
      {/* <div className="flex flex-row items-start justify-start space-x-5 text-xs">
        <div className="flex flex-row items-center justify-center h-[20px]">
          {creativity<=1 && <Level1></Level1>}
          {creativity==2 && <Level2></Level2>}
          {creativity==3 && <Level3></Level3>}
          {creativity==4 && <Level4></Level4>}
        </div>
        <div className="font-sans tracking-wide text-black font-medium">Creativity</div>
      </div>
      <div className="flex flex-row items-start justify-start space-x-5 text-xs">
        <div className="flex flex-row items-center justify-center h-[20px]">
          {organisation<=1 && <Level1></Level1>}
          {organisation==2 && <Level2></Level2>}
          {organisation==3 && <Level3></Level3>}
          {organisation==4 && <Level4></Level4>}
        </div>
        <div className="font-sans tracking-wide text-black font-medium">Organisation</div>
      </div>
      <div className="flex flex-row items-start justify-start space-x-5 text-xs">
        <div className="flex flex-row items-center justify-center h-[20px]">
          {teamWork<=1 && <Level1></Level1>}
          {teamWork==2 && <Level2></Level2>}
          {teamWork==3 && <Level3></Level3>}
          {teamWork==4 && <Level4></Level4>}
        </div>
        <div className="font-sans tracking-wide text-black font-medium">Team Work</div>
      </div>
      <div className="flex flex-row items-start justify-start space-x-5 text-xs">
        <div className="flex flex-row items-center justify-center h-[20px]">
          {communication<=1 && <Level1></Level1>}
          {communication==2 && <Level2></Level2>}
          {communication==3 && <Level3></Level3>}
          {communication==4 && <Level4></Level4>}
        </div>
        <div className="font-sans tracking-wide text-black font-medium">Communication</div>
      </div> */}
    </div>
  );
}
function Level1(){
  return(
    <div className="flex flex-row items-center b-red-300 h-full justify-center space-x-1">
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/30 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/30 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/30 rounded-md h-[5px]"></div>
    </div>
  );
}
function Level2(){
  return(
    <div className="flex flex-row items-center b-red-300 h-full justify-center space-x-1">
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/30 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/30 rounded-md h-[5px]"></div>
    </div>
  );
}
function Level3(){
  return(
    <div className="flex flex-row items-center b-red-300 h-full justify-center space-x-1">
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/30 rounded-md h-[5px]"></div>
    </div>
  );
}
function Level4(){
  return(
    <div className="flex flex-row items-center b-red-300 h-full justify-center space-x-1">
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
        <div className="w-[30px] bg-blue-700/80 rounded-md h-[5px]"></div>
    </div>
  );
}
export default function Education({data}){
  return(
    <div className="space-y-3">
      {
        data.map((i,index)=>(
          <div key={i.course} className="flex flex-row items-start justify-start">
            <div className=" w- text-2xl bg-rd-500 text-blue-700/80 px-1">
              <div className="bgred-300 h-5  text-4xl -translate-y-3">•</div>
             {  
               index!=(data.length-1) && <div className="bgred-400 flex flex-row items-center justify-center relative"><div className="absolute top-0 w-[2px] h-[39px] bg-gray-700/60"></div></div>
             }
            </div>
            <div className=" w-9/12 b-red-400">
              <div className="font-bold font-Inter tracking-wide capitalize text-blue-700/90 overflow-hidden">{i.course}</div>
              <div className="font-medium font- text-sm text-blac capitalize overflow-hidden">{i.institute}</div>
            </div>
            <div className="text-right w-2/12 b-red-300 text-sm text-black/70 overflow-hidden">
              <div>{i.endYear}</div>
              {/* <div>{i.duration} years</div> */}
            </div>
          </div>
        ))
      }
    </div>
  );
}
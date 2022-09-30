import Link from "next/link";
export default function WorkExperience({data}){
  return(
    <div className="space-y-3">
      {
        data.map((i,index)=>(
          <div key={index} className="h-[185px] flex  flex-row items-start justify-start">
            <div className="h-full w- text-2xl bg-rd-500 text-blue-700/80 px-1">
              <div className="bgred-300 h-5  text-4xl -translate-y-3">•</div>
             {  
               index!=(data.length-1) && <div className="bgred-400 flex flex-row items-center justify-center relative "><div className="absolute top-0 w-[2px] h-[180px] bg-gray-700/60"></div></div>
             }
            </div>
            <div className=" w-8/12 bgred-400">
              <div className="font-bold font-Inter tracking-wide text-blue-700/90 capitalize">{i.title}</div>
              <div className="font-medium font- text-sm text-blac capitalize">{i.company}</div>
              <div className="font-normal font- text-sm text-clip">{i.description}</div>
            </div>
            <div className="text-right w-3/12 b-red-300 text-sm text-black/70">
              <div>{i.startYear} - {i.endYear}</div>
              {/* <div><Link href={i.link}><a target={'_blank'} className="hover:text-black underline">/view</a></Link></div> */}
              {/* <div>{i.duration} years</div> */}
            </div>
          </div>
        ))
      }
    </div>
  );
}
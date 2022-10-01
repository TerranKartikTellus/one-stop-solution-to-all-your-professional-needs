export default function Step({count,maxCount}){

  let array = new Array(maxCount).fill(0);
  const activeButton = "bg-blue-600 rounded-full   h-[28px] w-[28px] disabled:h-[24px] disabled:w-[24px]   text-center flex flex-col items-center justify-center transition-all duration-200 ease-in-out"
  const inactiveButton = "bg-blue-300 opacity-30 rounded-full h-[28px] w-[28px] disabled:h-[24px] disabled:w-[24px] text-center flex flex-col items-center justify-center  transition-all duration-200 ease-in-out"
  
  const activeLine = "w-[30px] bg-blue-600 text-transparent h-[1px]"
  const inactiveLine = "w-[30px] bg-blue-300 opacity-10 text-transparent h-[1px]"
  
  return(
    <div className=" w-full h-full flex flex-row items-center justify-center mx-auto bg-red">
      {
        array.map((i,index)=>(
          <div className="text-gray-100 bgcyan-300 w-auto space-x-1 mx-1   flex flex-row items-center justify-start" key={index}>
            <button className={count>=index+1 ? activeButton : inactiveButton}  disabled={!(count>=index+1)} >{index+1}</button>
            {index!=maxCount-1 && <div className={count>=index+1 ? activeLine : inactiveLine}  >.</div>}
          </div>
        ))
      }
    </div>
  );
}
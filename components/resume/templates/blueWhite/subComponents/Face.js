
export default function Face({image, name, jobTitle}){
  // name = name.toUpperCase()
  jobTitle = jobTitle.toUpperCase()
  
  return(
    <div className="w-full flex flex-row items-start justify-start h-full">
      <div className="h-full flex flex-row items-center justify-center">
      {
        !image &&  <img src="/img/linkdinProfileImg.jpg" className="rounded-full brightness-105 w-[250px] shadow-xl drop-shadow-lg"></img>
      }
      {
      image &&  <img src={image} className="rounded-full brightness-105 w-[250px] shadow-xl drop-shadow-lg"></img>
      }
      </div>
      <div className="pl-16 flex flex-col  space-y-2 items-start bg-red-40  w-full h-[190px] justify-center ">
        <div className="text-5xl capitalize font-Inter font-medium text-blue-700">{name}</div>
        <div className="font-semibold pl-1 ">{jobTitle}</div>
      </div>
    </div>
  );
}
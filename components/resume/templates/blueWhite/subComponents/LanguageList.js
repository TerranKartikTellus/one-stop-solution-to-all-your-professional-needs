export default function LanguageList({item}){
  return(
    <div className="space-y-2">
      {
       item.map(i=>(
        <div key={i} className="capitalize flex flex-row items-center space-x-3 justify-start">
          <div><svg className="fill-blue-700/90 w-5 scale-90 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg></div>
          <div className="font-sans tracking-wide text-black font-medium text-xs">{i}</div>
        </div>
       ))  
      }
    </div>
  );
}

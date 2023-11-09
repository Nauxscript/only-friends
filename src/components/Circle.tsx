export default function Circle(){
  return (
    <div p-4 box-content w-60 h-84 rounded-md border-solid border-2 border-gray-100 overflow-hidden relative flex flex-col justify-end shadow-md hover:shadow-xl transition-all cursor-pointer>
      <img src="https://sdfsdf.dev/150x210.png,gray,white" w-full opacity-60 absolute left-0 top-0 z-0 />
      <div flex flex-col z-1>
        <div flex items-center text-slate-100 text-sm>
          <time>Nov 9, 2023</time>
          <span px-2>·</span>
          <img src="https://sdfsdf.dev/28x28.png" rounded-full mx-1 alt="avatar" />
          <span>John Doe</span>
        </div>
        <h3 text-left my-2 text-slate-50>This is your friend circle</h3>       
      </div>
    </div>
  )
}
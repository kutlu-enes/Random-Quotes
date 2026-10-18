export const Card = ({children, liked})=> {
  return(
    <div className={`flex flex-col place-content-between max-w-105 h-70 bg-zinc-100 m-auto mt-35 shadow-md rounded-xl p-8 ${liked ? "shadow-emerald-200 shadow-xl" : ""}`}>
        {children}
    </div>
  )
}
export function PrevQuoteBtn({handleClick,children}){
  return (
  <button onClick = {handleClick} className="cursor-pointer">{children}</button>
)
}
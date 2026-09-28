export function NextQuoteBtn({handleClick, children}){
  return (
  <button onClick = {handleClick} className="cursor-pointer">{children}</button>
)
}
export function Button({children, handleClick}){
  return (
  <button onClick={handleClick} className={`cursor-pointer`}>{children}</button>
)
}
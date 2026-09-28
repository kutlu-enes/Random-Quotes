export function LikeQuoteButton({children, handleClick}){
  return (
  <button onClick={handleClick} className={`cursor-pointer`}>{children}</button>
)
}
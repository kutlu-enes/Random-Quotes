export function AuthorName ({className, children}) {
  return (
    <p className={`text-sm text-right ${className}`}>{children}</p>
  )
}
export function QuoteText ({className, children}) {
  return (
    <p className={`text-lg ${className}`}>{children}</p>
  )
}
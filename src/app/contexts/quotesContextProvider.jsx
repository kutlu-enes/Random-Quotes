
"use client";

import { createContext, useState } from "react";
import { quotes as initialQuotes } from "@/quotes";

export const userId = "user-1234";

export const QuotesContext = createContext(null);

export function QuotesContextProvider({ children }) {
  const [quotes, setQuotes] = useState(
    initialQuotes.map((quote, index) => ({
      ...quote,
      likedBy: [],
      id: index,
    }))
  );

function handleLike(quoteId) {
  setQuotes((prevQuotes) =>
    prevQuotes.map((quote) => {
      if (quote.id === quoteId) {
        const isLiked = quote.likedBy.includes(userId);

        return {
          ...quote,
          likedBy: isLiked
            ? quote.likedBy.filter((id) => id !== userId)
            : [...quote.likedBy, userId],
        };
      }

      return quote;
    })
  );
}

  return (
    <QuotesContext.Provider value={{ quotes, handleLike }}>
      {children}
    </QuotesContext.Provider>
  );
}

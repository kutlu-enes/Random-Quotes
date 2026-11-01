"use client";

import { useContext } from "react";
import { Button } from "@/components/buttons";
import { QuoteText } from "@/components/typography/quote";
import { AuthorName } from "@/components/typography/author";

import { QuotesContext, userId } from "@/app/contexts/quotesContextProvider";

export default function LikedQuotes() {
  const { quotes, handleLike } = useContext(QuotesContext);

  const likedQuotes = quotes.filter((quote) => quote.likedBy.includes(userId));

  return (
    <main className="flex flex-col items-center grow py-10">
      <h1 className="text-2xl font-bold">Liked Quotes</h1>

      <section className="flex flex-col gap-4 my-10">
        {likedQuotes.length === 0 && <p>You haven't liked any quotes yet.</p>}

        {likedQuotes.map((quote) => (
          <div
            key={quote.id}
            className="text-center bg-zinc-100 p-10 rounded-md w-xl"
          >
            <div className="flex justify-end mb-6">
              <Button handleClick={() => handleLike(quote.id)}>💔</Button>
            </div>

            <div className="pb-6">
              <QuoteText className="text-zinc-800">{quote.quote}</QuoteText>
              <AuthorName>- {quote.author}</AuthorName>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

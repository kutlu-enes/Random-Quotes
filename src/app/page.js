"use client";

import { LikeQuoteButton } from "@/components/buttons/likeQuoteBtn";
import { NextQuoteBtn } from "@/components/buttons/nextQuoteBtn";
import { PrevQuoteBtn } from "@/components/buttons/prevQuoteBtn";
import { Card } from "@/components/card";
import { RightIcon, LeftIcon, HeartIcon } from "@/components/icons";
import { AuthorName } from "@/components/typography/author";
import { QuoteText } from "@/components/typography/quote";
import { quotes as initialQuotes } from "@/quotes";
import { useState } from "react";

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [index, setIndex] = useState(0);
  const userId = "User 1";
  
  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId);


  function nextQuoteBtn() {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex;
    });
    console.log("Next Clicked, Current quoute index is:", index);
  }

  function prevQuoteBtn() {
    setIndex((prevIndex) => {
      if (prevIndex == 0) {
        return prevIndex;
      }
      const newIndex = prevIndex - 1;
      return newIndex;
    });
    console.log("Current quoute index is:", index);
  }

  function likeBtn() {
    setQuotes((prevQuotes) =>
     prevQuotes.map((quote, quoteIndex) => {
      if (quoteIndex !== index) return quote;
      const isLiked = quote.likedBy.includes(userId);
      return {
       ...quote,
       likedBy: isLiked
        ? quote.likedBy.filter((id) => id !== userId)
        : [...quote.likedBy, userId],
      };
    })
  );
  }

  return (
    <main>
      <Card liked={isLiked}>
        <QuoteText className={"text-black-700 mb-3 "}>
          {quotes[index].quote}
        </QuoteText>
        <AuthorName className={"text-black-300 italic mb-14"}>
          - {quotes[index].author}
        </AuthorName>

        <div className="flex place-content-around">
          <PrevQuoteBtn handleClick={prevQuoteBtn}>
            <LeftIcon />
          </PrevQuoteBtn>

          <LikeQuoteButton handleClick={likeBtn}>
            <HeartIcon liked={isLiked}></HeartIcon>
          </LikeQuoteButton>

          <NextQuoteBtn handleClick={nextQuoteBtn}>
            <RightIcon />
          </NextQuoteBtn>
        </div>
      </Card>
    </main>
  );
}

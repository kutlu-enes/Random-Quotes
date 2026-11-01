"use client";

import { Button } from "@/components/buttons";
import { Card } from "@/components/card";
import { RightIcon, LeftIcon, HeartIcon } from "@/components/icons";
import { AuthorName } from "@/components/typography/author";
import { QuoteText } from "@/components/typography/quote";
import { useContext, useState } from "react";
import { QuotesContext } from "./contexts/quotesContextProvider";
import Link from "next/link";

export default function Home() {
  const { quotes, handleLike } = useContext(QuotesContext);
  const [index, setIndex] = useState(0);

  const userId = "user-1234";

  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId) ?? false;

  function nextQuoteBtn() {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex;
    });
    console.log("Next Clicked, Current quoute index is:", index); // delete that later
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

  return (
    <main>
      <div className="flex justify-center mt-10 mb-8">
        <Link
          href="/user/quotes/liked"
          className="bg-zinc-600 text-white p-6 py-3 rounded-lg text-sm"
        >
          Liked Quotes
        </Link>
      </div>

      <Card liked={isLiked}>
        <QuoteText className={"text-black-700 mb-3 "}>
          {quotes[index].quote}
        </QuoteText>
        <AuthorName className={"text-black-300 italic mb-14"}>
          - {quotes[index].author}
        </AuthorName>

        <div className="flex place-content-around">
          <Button className={"cursor-pointer"} handleClick={prevQuoteBtn}>
            <LeftIcon />
          </Button>

          <Button
            className={"cursor-pointer flex gap-3 "}
            handleClick={() => handleLike(currentQuote.id)}
          >
            <HeartIcon liked={isLiked} />{" "}
            <span>{quotes[index]?.likedBy?.length || 0}</span>
          </Button>

          <Button className={"cursor-pointer"} handleClick={nextQuoteBtn}>
            <RightIcon />
          </Button>
        </div>
      </Card>
    </main>
  );
}

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
  const quotes = [...initialQuotes];
  let [index, setIndex] = useState(0);
  let user = "User 1";
  let isLiked = quotes[index].likedBy.includes(user)
  const [liked, setLiked] = useState(isLiked);


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
    if (!quotes[index].likedBy.includes(user)) {
      quotes[index].likedBy.push(user);
      setLiked(isLiked => !isLiked);
      console.log(quotes[index].likedBy[0]);
    } else {
      let userIndex = quotes[index].likedBy.indexOf(user);
      quotes[index].likedBy.splice(userIndex, 1);
      setLiked(isLiked => !isLiked);
      console.log(quotes[index].likedBy[0]);
    }
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

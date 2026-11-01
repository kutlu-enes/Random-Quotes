"use client";

import { Button } from "@/components/buttons";
import { Card } from "@/components/card";
import { RightIcon, LeftIcon, HeartIcon } from "@/components/icons";
import { AuthorName } from "@/components/typography/author";
import { QuoteText } from "@/components/typography/quote";

export default function LikedQuotes() {
 
  return (
    <main>
      <h1>Liked Quotes</h1>
      <Card liked={isLiked}>
        <QuoteText className={"text-black-700 mb-3 "}>
          {quotes[index].quote}
        </QuoteText>
        <AuthorName className={"text-black-300 italic mb-14"}>
          - {quotes[index].author}
        </AuthorName>

        <div className="flex place-content-around">
          <Button handleClick={prevQuoteBtn}>
            <LeftIcon />
          </Button>

          <Button handleClick={toggleLike}>
            <HeartIcon liked={isLiked} />
          </Button>

          <Button handleClick={nextQuoteBtn}>
            <RightIcon />
          </Button>
        </div>
      </Card>
    </main>
  );
}




/* */
/*  const [quotes, setQuotes] = useState(initialQuotes);
  const [index, setIndex] = useState(0);
  const userId = "user_1";

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

  function toggleLike() {
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
      }),
    );
  }
*/
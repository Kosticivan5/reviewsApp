import { useEffect, useState } from "react";
import NavButtons from "./NavButtons";
import ReviewsArticle from "./ReviewsArticle";
import reviews from "./data";

function App() {
  const [data, setData] = useState(reviews);
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount((count += 1));
    if (count > data.length - 1) {
      setCount(0);
    }
  };
  const decrease = () => {
    setCount((count -= 1));
    if (count < 0) {
      setCount(data.length - 1);
    }
  };
  const person = data[count];

  return (
    <main className="h-screen bg-white flex justify-center items-center p-6 ">
      <article className="w-11/12  bg-sky-800 text-white  rounded-md  py-8 px-9 md:max-w-2xl ">
        <ReviewsArticle key={person.id} {...person} />
        <NavButtons increase={increase} decrease={decrease} />
      </article>
    </main>
  );
}

export default App;

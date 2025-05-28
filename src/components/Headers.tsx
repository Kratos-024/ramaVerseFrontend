import { useState } from "react";
import { sendVerse } from "../api/model.api";

export const Headers = () => {
  const [verseInput, setVerseInput] = useState("");
  const [result, setResult] = useState("");

  const handleCheckVerse = async () => {
    if (verseInput.trim() !== "") {
      const data = await sendVerse(verseInput);
      console.log("datadatadatadatadata", data);
      if (data && data["Answer"]) {
        setResult("✅ This verse is present in Ramayana.");
      } else {
        setResult("❌ No verse is not present in Ramayana.");
      }
    } else {
      setResult("⚠️ Please enter a verse.");
    }
  };

  return (
    <section className="w-full relative">
      <div
        className="relative w-full bg-[#1F1F1F] text-white min-h-screen
      flex 
         items-center justify-center px-4"
        style={{
          backgroundImage: `url(images/bg-temple.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <h1 className=" absolute top-10 max-lg:left-10 max-md:left-10 max-md:top-5 max-md:text-[24px] left-20 text-[28px] font-bold mb-4">
          Ramayana
        </h1>
        <div className="hanuman-black  p-6 rounded-xl max-w-2xl w-full text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">🕉️ RamVerse</h2>
          <p className="text-lg md:text-xl mb-6">
            Enter a verse to check if it's from the sacred Ramayana.
          </p>
          <input
            type="text"
            placeholder="Paste your verse here..."
            className="w-full outline-none p-3 rounded-md text-black mb-4"
            value={verseInput}
            onChange={(e) => setVerseInput(e.target.value)}
          />
          <button
            onClick={handleCheckVerse}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-md"
          >
            Check Verse
          </button>

          <div>
            {result && (
              <p className="mt-4 text-white bg-/70 p-2 rounded-md">{result}</p>
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

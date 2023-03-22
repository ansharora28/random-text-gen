import { useState, useEffect } from "react";

const Index = () => {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateText = () => {
    setIsGenerating(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setText(data[randomIndex].body);
        setIsGenerating(false);
      });
  }

  useEffect(() => {
    generateText();
  }, []);

  return (
    <div className="container mx-auto md:px-20">
      <h1 className="font-bold text-4xl pb-12 text-center">Random Text Generator</h1>
      <p className=" font-bold text-3xl text-orange-400 text-center bg-indigo-200 w-25 mx-10">This is a NextJs + TailwindCSS project</p>
      <div className="flex justify-center py-10">
        <button className="rounded-lg text-3xl px-3 py-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." onClick={generateText} disabled={isGenerating}>Generate Text</button>
      </div>
      <p class="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-6 shadow-lg">The text is: {text}</p>
    </div>
  );
}

export default Index;

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
    <div className="content">
      <h1>Random Text Generator</h1>
      <button onClick={generateText} disabled={isGenerating}>Generate Text</button>
      <p>{text}</p>
    </div>
  );
}

export default Index;

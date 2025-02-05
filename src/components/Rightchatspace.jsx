import React, { useState } from "react";




const Rightchatspace = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);



  // src/api.js
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

 const getMistralResponse = async (userInput) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",
        messages: [{ role: "user", content: userInput }],
      }),
    });

    const data = await response.json();
    console.log(data);
    return data.choices[0].message.content || "No response from AI";
  } catch (error) {
    console.error("Error:", error);
    return "There was an error with the request.";
  }
};


  const handleInputChange = (e) => {
    setUserInput(e.target.value);
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput) return;

    setLoading(true);
    const aiResponse = await getMistralResponse(userInput);
    setResponse(aiResponse);
    setLoading(false);
  };

  return (

  
    <div className="h-screen w-4/5  bg-[#212121] flex flex-col items-center !overflow-y-scroll custom-scrollbar  ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Chat with Mistral AI</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={userInput}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
            placeholder="Ask something..."
            rows="4"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "Ask AI"}
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="font-semibold text-lg">AI's Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
      <div>
 
   </div>
    </div>
 
  );
}

export default Rightchatspace;


import React, { useState } from "react";
import TypingEffect from "./TypingEffect";





const Rightchatspace = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  // const [response, setResponse] = useState("");
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

    return data?.choices[0]?.message?.content || "No response from AI";
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

    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setUserInput(""); // Clear input after sending

    setLoading(true);
   
    const aiResponse = await getMistralResponse(userInput);
    console.log("ai response:" ,aiResponse);
    setMessages([...newMessages, { role: "ai", content: aiResponse }]);
      setLoading(false);
    // setResponse(aiResponse);
  
  };

 
  return (

  
    <div className="h-screen w-4/5  bg-[#212121] flex flex-col pt-14  items-center  overflow-y-hidden  ">

<div className="h-4/5 w-full px-[165px] pb-4 overflow-y-auto flex flex-col space-y-2 !overflow-y-scroll custom-scrollbar">
  {messages.length === 0 ? (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
    <h1 className="text-white font-semibold text-3xl">Hello i am ChatGPT</h1>
    <img className="size-10" src="src/assets/image/chatgpt.svg" alt="" />
    <h3 className="text-white font-semibold text-3xl">What can I help you with?</h3>
    </div>
  ) : (
    messages.map((msg, index) => ( 
      <div
        key={index}
        className={`p-3 rounded-lg max-w-[70%] ${
          msg.role === "user"
            ? "self-end bg-[#303030] !rounded-full flex justify-center items-center text-white"
            : "self-start bg-transparent text-white"
        }`}
      >
        <div className={`${msg.role === "ai" ? "w-57vw" : ""}`}>
          {msg.role === "ai" ? (
            <TypingEffect response={msg.content} />
          ) : (
            String(msg.content)
          )}
        </div>
      </div>
    ))
  )}
  {loading && <div className="self-start text-gray-500">Typing...</div>}
</div>

        

        <form onSubmit={handleSubmit} className="flex align-center justify-center align-center flex-col absolute bottom-2 w-3/5 p-4">
          <textarea
            value={userInput}
            onChange={handleInputChange}
            className="w-full bg-[#303030] p-3 resize-none text-white placeholder-[#b4b4b4] rounded-md"
            placeholder="Message ChatGPT"
            rows="4"
            cols="100"
            
          />

          <button
            type="submit"
            className="size-10  flex justify-center items-center bg-white absolute right-7 text-white rounded-full"
            disabled={loading}
            
          >
           
          <img src="src/assets/image/arrowup.svg" alt="" style={{ fill: loading ? 'grey' : 'black' }} />
          
          </button>
        </form>

        {/* {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="font-semibold text-lg">AI's Response:</h3>
            <p>{response}</p>
          </div>
        )} */}
     
      <div>
 
   </div>
    </div>
 
  );
}

export default Rightchatspace;


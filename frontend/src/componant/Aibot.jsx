import React, { useState } from 'react'
import { BotMessageSquare, X, Send } from 'lucide-react'

function Aibot() {

  const [isOpen, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // === Send message to AI API === //
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      const botMsg = { role: "bot", text: data.reply };
      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      setMessages(prev => [...prev, { role: "bot", text: "Error: Unable to connect to AI" }]);
    }
  };

  // Send on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!isOpen)}
        className='fixed w-[70px] h-[70px] rounded-full bg-green-600 text-white 
                   top-[90dvh] lg:bottom-[20px] right-[20px] flex justify-center items-center 
                   cursor-pointer z-[999]'
      >
        <BotMessageSquare size={32} />
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className='fixed mt-[50px] inset-0 bg-black/40 backdrop-blur-sm z-[998] flex justify-end'>

          <div className='w-[90%] sm:w-[400px] h-[76dvh] lg:h-[80vh] bg-white shadow-xl 
                          rounded-lg relative mr-4 mt-4 flex flex-col'>

            {/* Header */}
            <div className='bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>AI Assistant</h2>
              <button onClick={() => setOpen(false)} className='cursor-pointer'>
                <X size={22} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className='flex-1 overflow-y-auto p-3 space-y-3'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-green-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className='p-3 border-t flex gap-2'>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className='flex-1 h-[40px] border rounded-md px-3 focus:outline-green-600'
              />
              <button 
                onClick={sendMessage} 
                className='bg-green-600 text-white px-4 rounded-md flex items-center'
              >
                <Send size={18} />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Aibot;

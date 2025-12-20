
import { useEffect, useRef, useState } from 'react'
import { BotMessageSquare, X, Send, Loader2, Import } from 'lucide-react'


function Aibot() {
  const [isOpen, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg = { role: "user", text: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL+"/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()

      setMessages(prev => [
        ...prev,
        { role: "bot", text: data.reply || "No response" }
      ])

    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: "bot", text: "❌ Unable to connect to AI" }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage()
  }

  return (
    <>
      {/* Floating Button */}
      <div
       onClick={() => setOpen(!isOpen)}
       className='fixed w-[70px] h-[70px] rounded-full bg-green-600 text-white 
                   top-[89dvh] lg:bottom-[20px] right-[20px] flex justify-center items-center 
                   cursor-pointer z-[999]'
      >
        <BotMessageSquare size={30} />
      </div>
        
        {/* Chat popup */}
      {isOpen && (
        <div className='fixed mt-[50px] inset-0 bg-black/40 backdrop-blur-sm z-[998] flex justify-end'>

          <div className='w-[90%] sm:w-[400px] h-[76dvh] lg:h-[80vh] bg-white shadow-xl 
                          rounded-lg relative mr-4 mt-4 flex flex-col'>

            {/* Header */}
            <div className='bg-green-600 text-white p-4 rounded-t-lg flex justify-between'>
              <h2 className='font-semibold'>AI Assistant</h2>
              <X className='cursor-pointer' onClick={() => setOpen(false)} />
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-3 space-y-3'>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] text-sm ${
                    msg.role === "user"
                      ? "bg-green-500 text-white ml-auto"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {loading && (
                <div className='flex items-center gap-2 text-gray-500'>
                  <Loader2 className='animate-spin' size={16} />
                   Thinking...
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className='p-3 border-t flex gap-2'>
              <input
                value={input} 
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className='flex-1 border rounded-md px-3 h-[40px]'
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className='bg-green-600 text-white px-4 rounded-md'
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

export default Aibot


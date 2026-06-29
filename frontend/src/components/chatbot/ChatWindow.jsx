import { useEffect, useRef, useState } from "react";
import mockChatResponses from "../../data/mockChatResponses.js";
import "./ChatWindow.css";

function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: "m1", role: "bot", text: "Hi there! Ask me anything about your budget, taxes, or goals." },
  ]);
  const [input, setInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const getResponse = (text) => {
    const normalized = text.toLowerCase();

    if (normalized.includes("budget")) return mockChatResponses.budget;
    if (normalized.includes("tax")) return mockChatResponses.tax;
    if (normalized.includes("investment")) return mockChatResponses.investment;
    if (normalized.includes("savings")) return mockChatResponses.savings;
    if (normalized.includes("expense")) return mockChatResponses.expenses;

    return mockChatResponses.default;
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isWaiting) return;

    const userMessage = { id: `u-${Date.now()}`, role: "user", text: trimmed };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsWaiting(true);

    setTimeout(() => {
      const botMessage = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: getResponse(trimmed),
      };
      setMessages((current) => [...current, botMessage]);
      setIsWaiting(false);
    }, 650);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-window-card">
      <div className="chat-window-messages" ref={listRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.role === "user" ? "chat-user" : "chat-bot"}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-window-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a question..."
        />
        <button
          type="button"
          className="chat-send-button"
          onClick={handleSend}
          disabled={isWaiting}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;

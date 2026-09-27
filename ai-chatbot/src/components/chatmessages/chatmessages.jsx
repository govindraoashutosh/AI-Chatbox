import { useSelector } from "react-redux";
import "./ChatMessages.css";

export default function ChatMessages() {
  const messages = useSelector((state) => state.chat.messages);
  const loading = useSelector((state) => state.chat.loading);
  const error = useSelector((state) => state.chat.error);

  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-row ${message.role}`}
        >
          <div className="message-bubble">
            <span className="message-label">
              {message.role === "user" ? "You" : "AI"}
            </span>

            <p>{message.text}</p>
          </div>
        </div>
      ))}

      {loading && (
        <div className="message-row ai">
          <div className="message-bubble loading-message">
            <span className="message-label">AI</span>
            <p>Thinking...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
}
import './Header.css';
import { useDispatch } from "react-redux";
import { clearChat } from "../../redux/chatslice";

export default function Header() {
     const dispatch = useDispatch();

  const handleNewThread = () => {
    dispatch(clearChat());
  };
  return (
    <header className="top-header">

      
      <div className="model-selector-pill">
        <span>✦</span>
        <span className="model-name">AI Chatbot</span>
        <span>⌄</span>
      </div>

    
      <div className="header-actions">

        <button className="action-pill-btn">
          🔍
          <span className="btn-text">Search thread</span>
        </button>

        <button className="action-pill-btn">
          👤+
          <span className="btn-text">Invite</span>
        </button>

        <button className="primary-pill-btn"  onClick={handleNewThread}>
             
          +
          <span>New Thread</span>
        </button>

      </div>

    </header>
  );
}
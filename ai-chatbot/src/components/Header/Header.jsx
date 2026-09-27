import './Header.css';

export default function Header() {
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

        <button className="primary-pill-btn">
          +
          <span>New Thread</span>
        </button>

      </div>

    </header>
  );
}
import { useState } from 'react';
import './PromptInput.css';

export default function PromptInput({ value, onChange }) {
  const [citationEnabled, setCitationEnabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      console.log('Prompt:', value);
      onChange('');
    }
  };

  return (
    <div className="prompt-input-card">

      {/* Input Area */}
      <div className="input-upper-row">

        <span className="sparkle-icon">✦</span>

        <textarea
          className="prompt-textarea"
          placeholder="Ask AI a question or make a request..."
          rows="2"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />

      </div>

      {/* Bottom Toolbar */}
      <div className="input-lower-toolbar">

        <div className="toolbar-left">

          <button type="button" className="toolbar-pill-btn">
            📎
            <span>Attach</span>
          </button>

          <button type="button" className="toolbar-pill-btn">
            <span>Writing Styles</span>
            <span>⌄</span>
          </button>

        </div>

        <div className="toolbar-right">

          {/* Citation Toggle */}
          <div
            className="citation-toggle"
            onClick={() => setCitationEnabled(!citationEnabled)}
          >
            <div className={`switch-pill ${citationEnabled ? 'active' : ''}`}>
              <div className="switch-thumb"></div>
            </div>

            <span className="citation-label">
              Citation
            </span>
          </div>

          {/* Send */}
          <button
            type="button"
            className="send-prompt-btn"
            onClick={handleSubmit}
          >
            ↑
          </button>

        </div>

      </div>

    </div>
  );
}
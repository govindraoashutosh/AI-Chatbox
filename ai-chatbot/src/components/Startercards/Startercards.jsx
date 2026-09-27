import "./StarterCards.css";

export default function StarterCards({ onSelectExample }) {
  const cards = [
    {
      id: 1,
      text: "Write a to-do list for a personal project",
      icon: "👤",
    },
    {
      id: 2,
      text: "Generate an email to reply to a job offer",
      icon: "✉",
    },
    {
      id: 3,
      text: "Summarize this article in one paragraph",
      icon: "💬",
    },
    {
      id: 4,
      text: "How does AI work in a technical capacity",
      icon: "</>",
    },
  ];

  return (
    <div className="starter-section">
      <div className="starter-label">
        GET STARTED WITH AN EXAMPLE BELOW
      </div>

      <div className="starter-cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="starter-card"
            onClick={() => onSelectExample(card.text)}
          >
            <p className="starter-card-text">{card.text}</p>

            <div className="starter-card-footer">
              <span className="card-icon">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
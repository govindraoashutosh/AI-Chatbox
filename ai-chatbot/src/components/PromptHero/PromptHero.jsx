import './PromptHero.css';

export default function PromptHero({ userName = 'Ashutosh' }) {
  return (
    <div className="prompt-hero">

      <div className="orb-wrapper">
        <div className="orb-diffuse-glow"></div>
        <div className="glossy-purple-orb"></div>
      </div>

      <h1 className="hero-heading">
        <span className="heading-line-1">
          Good Afternoon, {userName}
        </span>

        <span className="heading-line-2">
          What's on <span className="highlight-text">your mind?</span>
        </span>
      </h1>

    </div>
  );
}
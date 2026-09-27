import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', icon: 'home' },
    { id: 'chat', icon: 'chat' },
    { id: 'history', icon: 'history' },
    { id: 'bot', icon: 'bot' },
    { id: 'folder', icon: 'folder' },
    { id: 'share', icon: 'share' },
    { id: 'storage', icon: 'storage' },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'home':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );

      case 'chat':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );

      case 'history':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );

      case 'bot':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
          </svg>
        );

      case 'folder':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        );

      case 'share':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        );

      case 'storage':
        return (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="brand-logo">
          <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="#111827" strokeWidth="2.2"
            strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
            <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
            <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
          </svg>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                className={`nav-button ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
                aria-label={item.id}
              >
                {isActive && <span className="active-pill-bar" />}
                {renderIcon(item.icon)}
              </button>
            );
          })}
        </nav>

      </div>

      <div className="sidebar-bottom">

        <button className="nav-button" aria-label="Support">
          🎧
        </button>

        <button className="nav-button" aria-label="Settings">
          ⚙️
        </button>

        <div className="user-avatar-wrap">
         
        </div>

      </div>

    </aside>
  );
}
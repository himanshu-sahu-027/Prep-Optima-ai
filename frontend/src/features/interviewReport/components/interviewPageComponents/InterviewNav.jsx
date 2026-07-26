import React from 'react'

const NAV_ITEMS = [
    { id: 'technical', label: 'Technical Questions', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>) },
    { id: 'behavioral', label: 'Behavioral Questions', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>) },
    { id: 'roadmap', label: 'Road Map', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>) },
]

const InterviewNav = ({ activeNav, setActiveNav }) => {
    return (
        <nav className='interview-nav'>
            <div className="nav-content">
                <p className='interview-nav__label'>Sections</p>
                {NAV_ITEMS.map(item => (
                    <button
                        key={item.id}
                        className={`interview-nav__item ${activeNav === item.id ? 'interview-nav__item--active' : ''}`}
                        onClick={() => setActiveNav(item.id)}
                    >
                        <span className='interview-nav__icon'>{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default InterviewNav

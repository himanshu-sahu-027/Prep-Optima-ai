import React from 'react'

const SkillGaps = ({ skillGaps }) => {
    return (
        <div className='skill-gaps'>
            <p className='skill-gaps__label'>Skill Gaps</p>
            <div className='skill-gaps__list'>
                {skillGaps.map((gap, i) => (
                    <span key={i} className={`skill-tag skill-tag--${gap.severity}`}>
                        {gap.skill}
                    </span>
                ))}
            </div>
            <div className="skill-legend">

                <p className="skill-legend__title">
                    Severity Guide
                </p>

                <div className="skill-legend__item">
                    <span className="skill-dot skill-dot--high"></span>
                    <span>High • Essential for this role</span>
                </div>

                <div className="skill-legend__item">
                    <span className="skill-dot skill-dot--medium"></span>
                    <span>Medium • Recommended </span>
                </div>

                <div className="skill-legend__item">
                    <span className="skill-dot skill-dot--low"></span>
                    <span>Low • Nice to have</span>
                </div>

            </div>
        </div>
    )
}

export default SkillGaps

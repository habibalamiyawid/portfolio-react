import React, { useState } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [expanded, setExpanded] = useState(false); // State to track if list is expanded

  const handleToggle = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <div>
      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="mywork-container">
          {mywork_data
            .slice(0, expanded ? mywork_data.length : 6) // Show all or 6 items based on `expanded`
            .map((work, index) => {
              return (
                <a key={index} href={work.w_url} target="_blank" rel="noopener noreferrer">
                  <img src={work.w_img} alt={work.w_name} />
                </a>
              );
            })}
        </div>

        <div className="mywork-showmore">
          <p onClick={handleToggle} style={{ cursor: 'pointer' }}>
            {expanded ? 'Show Less' : 'Show More'} {/* Toggle button text */}
          </p>
          <img
            src={arrow_icon}
            alt=""
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyWork;

import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div>
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
               {mywork_data.map((work, index) => {
                 return (
                   <a key={index} href={work.w_url} target="_blank" rel="noopener noreferrer">
                     <img src={work.w_img} alt={work.w_name} />
                   </a>
                 )
               })}
            </div>

            <div className="mywork-showmore">
              <p><a href="https://github.com/habibalamiyawid">Show More </a></p>
              <img src={arrow_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MyWork

import React from 'react'
import './about.css'
// import myImage from '../../assets/my-image2.jpg'
// import {GiGraduateCap} from 'react-icons/gi'
// import {BsBookmarkStar} from 'react-icons/bs'
// import {TfiWorld} from 'react-icons/tfi'

function About() {
  return (
    <section id='about'>
      
      <h2>About Myself</h2>

      <div className="container about__container">
            <p>Hi, I’m Ali — a former Chemistry grad turned full-stack software engineer. My path into tech wasn’t traditional, but it’s been driven by a deep curiosity, hands-on learning, and mentorship from great engineers along the way. I began my development career building and shipping production code for both startups and enterprise teams, where I gained foundational experience across the stack.</p>

<p>After relocating to a new city, I took a detour and opened a restaurant — an experience that sharpened my business instincts and taught me the value of understanding user needs from the ground up. When COVID hit, I returned to my true passion: software development. I re-entered the field at Zingerman’s in Ann Arbor, where I led full-stack development across 12+ websites. I built modern CMS experiences using Sage by Roots (making Wordpress fun and modern for developers), deployed code through CI/CD pipelines, and worked directly on Linux servers to troubleshoot production issues. It was a true end-to-end engineering role that let me merge technical depth with business awareness.</p>

<p>Today, I’m thrilled to be back in tech, constantly building, learning, and pushing myself forward. Whether it’s crafting responsive UIs, deploying robust APIs, or diving into DevOps, I love solving real problems with thoughtful code.</p>

<p>Outside of coding, I’m a movie nerd who can talk Star Wars, sports, and storytelling for hours. If you’re looking for a developer who brings technical skill, business perspective, and a collaborative mindset — I’d love to connect.

</p>
      </div>
    </section>
  )
}


export { About };
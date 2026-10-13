import internship from './internship.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import review from './review.json';
function Home() {
    const [searchTerm, setSearchTerm] = useState("");
const [query, setQuery] = useState("");

const filteredInternships = internship.filter((curEl) =>
  `${curEl.title} ${curEl.company} ${curEl.location} ${curEl.mode} ${curEl.skills.join(" ")}`
    .toLowerCase()
    .includes(query.toLowerCase())
);
    return (
        <div className='mobile'>
            <div className="body">
                <p>An internship is <span className='span'>not just a step toward <br />a career,</span>
                    it is the beginning of turning <br /> knowledge into experience</p>
                <div className="text">
                    <p>Learn. Grow. Succeed!</p>
                    
                </div>

                <div className='image-intern'>
                    <img src="./int.png" alt="hlo" className="internshiplogo" />
                </div>
            
                <button className='find'><Link to="/internship">Find Internship</Link></button>
                
            </div>
            <div className="search">
  <input
    type="text"
    className="input"
    placeholder="🔍 Search internships"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        setQuery(searchTerm);
      }
    }}
  />
</div>
            <div className='map'>
                <h1>Explore Internships Opportunities</h1>
                <p className='para'>Discover a variety of exciting internship roles that match your career interests. 
                    Apply now and take the first step toward your dream job! </p>
                <div className='side'>
                
                    {filteredInternships.map((curEl) => {
                        { console.log("internship element", curEl) }
                        return (
                            <ul className='container' key={curEl.id}>
                                <li>
                                    <div className='aaa'>
                                        <div className='abc'>
                                            <p className='title'>{curEl.title}</p>
                                            <p className='title'>{curEl.company}</p>
                                            <p>📍 Location:{curEl.location}</p>
                                            <p>🔄Mode:{curEl.mode}</p>
                                            <p>📅 Duration:{curEl.duration}</p>
                                            <p>💵 Stiphend:{curEl.stipend}</p>
                                            <p>🛠️Skills:{curEl.skills}</p>
                                        </div>
                                        <div className='view'>
                                            <a className='view-details'href={curEl.apply_url} target='_blank'>
                                                View Details
                                                </a>
                                            <a href={curEl.apply_url} target='_blank'>
                                                <button className='button1'>Apply Now</button>
                                                </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>
            < div className='map1'>
                <h1>what our interns says</h1>
                <div className='side1'>
                    {review.map((a) => {
                        return (
                            <ul key={a.id}>
                                <li>
                                    <div className='review-dis'>
                                        <div className='img-size'>
                                      <img className='review-image' src="./image.png" alt="hlo"
                                      height='40px' width='40px'/>
                                      
                                        <p className='title'>{a.name}</p>
                                        </div>
                                        <p className='title2'>{a.role}</p>
                                         
                                        <p className='title1'>"{a.review}"</p>
                                      
                                    </div>
                                </li>
                            </ul>
                        );
                    }
                    )}
                </div>
            </div>
            <div className='image'>
                <img src="./image2.png" alt="hii"
                    width='100%'
                    height='400px' />
            </div>
            <div className='about' id='about'>
                <p className='bbb'>About Us</p>
                <p>At Internship Inc., we believe in real-world experience over just theoretical knowledge.
                    Our internship programs are carefully crafted to help students and fresh graduates explore
                    industry challenges, grow professionally, and contribute meaningfully to innovative projects.
                    Whether you're into development, design, marketing, or strategy — we provide a platform that
                    empowers your journey to success.</p>
                <button>Learn More</button>
            </div>
        </div>
    );
}
export default Home;
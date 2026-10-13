import internship from "./internship.json";
import { useState } from "react";
function Internship() {
  const [searchTerm, setSearchTerm] = useState("");
const [query, setQuery] = useState("");

const filteredInternships = internship.filter((curEl) =>
  `${curEl.title} ${curEl.company} ${curEl.location} ${curEl.mode} ${curEl.skills.join(" ")}`
    .toLowerCase()
    .includes(query.toLowerCase())
);
  return (
    <div className="ccc">
      <h1>All Internships Lists</h1>
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
       <div className='map'>
      <div className="side">
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
                                                <button className='button1'>Apply</button>
                                                </a>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        );
                    })}
                    </div>
                    </div>
    </div>
  );
}

export default Internship;








import "./Resume.scss";

export default function Resume() {
  return (
    <div className="Resume">
      <div className="Resume__top">
        <div className="Resume__name">Nathan Wade</div>
        <div className="Resume__jobTitle">FRONT-END DEVELOPER</div>
      </div>

      <div className="Resume__section">
        <div className="Resume__header">SUMMARY</div>
        <div className="Resume__content">
          Experienced Front-End Developer with 7 years 
          of proven expertise in designing, developing, and managing 
          cutting-edge web applications. 
          Skilled in translating business requirements into intuitive 
          user interfaces and implementing robust functionality. 
          Continuously striving for excellence, actively contributing 
          to the improvement of software development processes and best 
          practices.
        </div>
      </div>

      <div className="Resume__columnContainer">
        <div className="Resume__column--left">
          <div className="Resume__section">
            <div className="Resume__header">CONTACT</div>
            <div className="Resume__content">
              <div className="Resume__email">
                <span>Email</span>
                <a href="mailto:papernathan@gmail.com">papernathan@gmail.com</a>
              </div>
              <div className="Resume__location">
                <span>Location</span>Owensboro, KY
              </div>
            </div>
          </div>

          <div className="Resume__section">
            <div className="Resume__header">SKILLS</div>
            <div className="Resume__content">
              <div className="Resume__list">
                <div className="Resume__list--name">Languages</div>
                <ul className="Resume__list--items">
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
                  <li>Javascript / Typescript</li>
                </ul>
              </div>

              <div className="Resume__list">
                <div className="Resume__list--name">Technologies</div>
                <ul className="Resume__list--items">
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              <div className="Resume__list">
                <div className="Resume__list--name">Testing</div>
                <ul className="Resume__list--items">
                  <li>Jest</li>
                  <li>Vitest</li>
                  <li>Mocha</li>
                </ul>
              </div>

              <div className="Resume__list">
                <div className="Resume__list--name">Bonus Technologies</div>
                <ul className="Resume__list--items">
                  <li>Ruby on Rails (ERB, Slim)</li>
                  <li>Google Tag Manager</li>
                  <li>Google Analytics</li>
                  <li>Zapier</li>
                  <li>TI-BASIC 83</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Resume__section">
            <div className="Resume__header">EDUCATION</div>
            <div className="Resume__content">
              <div className="Resume__school">
                <p>Murray State University</p>
                <p>2013</p>  
              </div>
              <div className="Resume__degree">Bachelor of Science in Graphic Design</div>
            </div>
          </div>
        </div>

        <div className="Resume__column--right">
          <div className="Resume__section">
            <div className="Resume__header">EXPERIENCE</div>
            <div className="Resume__job">
              <div className="Resume__job--title">
                <p>Scout APM</p>
                <p>Remote</p>
              </div>
              <div className="Resume__job--info">
                <p>Senior Front-End Engineer</p>
                <p>Aug 2020 - Present</p></div>
              <div className="Resume__job--description">
                <ul>
                  <li>Developed and managed the front-end for 5 applications. This includes technology selection, training, and company-wide feature demonstrations.</li>
                  <li>Reduced application load by optimizing front-end code and assets as shown by a 100% improvement in Google Lighthouse scores.</li>
                  <li>Increased observability for our Vue application by writing custom instrumentation. This allowed us to pinpoint problem components and increase our response time to newly introduced bugs by 40%.</li>
                  <li>Wrote tests for all incoming code changes which helped contribute to our core product maintaining 100% test coverage.</li>
                  <li>Improved performance on a feature table by implementing a different front-end data store increasing the number of displayed items from 10,000 to greater than 2 million.</li>
                  <li>I helped accelerate the onboarding of new developers by writing internal documentation, training materials, and offering pairing sessions.</li>
                </ul>
              </div>
            </div>

            <div className="Resume__job">
              <div className="Resume__job--title">
                <p>Fox & Farthing</p>
                <p>Remote</p>
              </div>
              <div className="Resume__job--info">
                <p>Reviewer and Experience Engineer</p>
                <p>Jun 2021 - Jul 2022</p>
              </div>
              <div className="Resume__job--description">
                <ul>
                  <li>Collaborated with cross-functional teams to gather requirements, analyze end-user needs, and define software specifications.</li>
                  <li>Improved code quality by executing code reviews.</li>
                  <li>Assisted in feature planning and the product roadmap.</li>
                </ul>
              </div>
            </div>

            <div className="Resume__job">
              <div className="Resume__job--title">
                <p>Frankish International</p>
                <p>Taipei, Taiwan</p>  
              </div>
              <div className="Resume__job--info">
                <p>Front-End Engineer</p>
                <p>Jul 2016 - Jul 2018</p>
              </div>
              <div className="Resume__job--description">
                <ul>
                  <li>Designed, developed, and managed the front-end for 5 applications.</li>
                  <li>Created and presented front-end software solutions to potential clients which resulted in the company being selected for 5 unique projects.</li>
                  <li>Contributed to the continuous improvement of software development processes and best practices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

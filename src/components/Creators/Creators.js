import './Creators.css';
import linkedIn from '../../assets/linkedin.png';
import gitHub from '../../assets/github.png';
import sarah from '../../assets/sarah.png';
import raquel from '../../assets/raquel.JPG';
import anthony from '../../assets/anthony.jpeg';
import michael from '../../assets/michael.jpg';
import henry from '../../assets/henry.png';
import ezze from '../../assets/ezze.png';

const Creators = () => {
  return (
    <section className="creators-page">
      <h1 className="meet-the-team">Meet the Team!</h1>
      <div className="frontend-and-backend-containers">
        <div className="frontend-container">
          <h2 className="frontend">Frontend</h2>
          <article className="member-container">
            <div>
              <p className="name">SARAH RUDY</p>
              <a href="https://www.linkedin.com/in/rudysarah/" target="_blank" rel="noopener noreferrer">
                <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
              </a>
              <a href="https://github.com/sarahrudy" target="_blank" rel="noopener noreferrer">
                <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
              </a>
            </div>
            <img className="profile-pic" src={ sarah } alt="Profile picture"/>
            <p className="blurb">Before Turing, I was working in oil & gas as a Landman. When Covid hit, I had a fortunate opportunity to reevaluate what I really wanted to do. I've always been inspired by technology and how it's changing the world we live in, so I decided to pursue software development. I am super curious by nature with a passion for innovation and challenging the status quo. I'm especially passionate about the potential technology has to better human lives. Connect with me on LinkedIn so we can a get a conversation started!</p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">RAQUEL HILL</p>
              <a href="https://www.linkedin.com/in/raquelhill/" target="_blank" rel="noopener noreferrer">
                <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
              </a>
              <a href="https://github.com/Raquelhill" target="_blank" rel="noopener noreferrer">
                <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
              </a>
            </div>
            <img className="profile-pic" src={ raquel } alt="Profile picture"></img>
            <p className="blurb">I'm a driven and self-motivated entrepreneur turned Frontend Software Developer. My passions in life are my family and work. I try to think outside of the box because I believe that innovation is driven by creativity. My primary goal in life is to better myself through continuous learning and building on my successes. The world of software development is ever-changing and fulfills my ongoing quest for knowledge, creativity, and problem solving.</p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">ANTHONY IACONO</p>
              <a href="https://www.linkedin.com/in/anthony-iacono/" target="_blank" rel="noopener noreferrer">
                <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
              </a>
              <a href="https://github.com/anthony-iacono" target="_blank" rel="noopener noreferrer">
                <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
              </a>
            </div>
            <img className="profile-pic" src={ anthony } alt="Profile picture"></img>
            <p className="blurb">From deployment overseas to competition dance floors, the same curiosity and love of learning that defined my service as a soldier and teacher now fuel my creative work building impactful apps as a software engineer.</p>
          </article>
        </div>
        <div className="backend-container">
          <h2 className="backend">Backend</h2>
          <article className="member-container">
            <div>
              <p className="name">MICHAEL MATTSON</p>
              <a href="https://www.linkedin.com/in/michael-p-mattson/" target="_blank" rel="noopener noreferrer">
                <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
              </a>
              <a href="https://github.com/michaelpmattson" target="_blank" rel="noopener noreferrer">
                <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
              </a>
            </div>
            <img className="profile-pic" src={ michael } alt="Profile picture"/>
            <p className="blurb">I’m a Software Engineer with a background in travel operations and international education. I'm driven by a desire to solve problems. Programming is the perfect field for me since it's a requirement to constantly learn new things. I spent 5 years abroad as an educator, which eventually led me to the travel industry where I've been able to flex analytical skills as part of a global operations team. Through both of these roles, it’s been a pleasure developing experience that reflects my sense of empathy and cultural competence. As a developer and in general, I'm attracted to purpose-driven work, especially Green Tech and sustainability focused roles.</p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">HENRY SCHMID</p>
              <a href="https://www.linkedin.com/in/henry-schmid/" target="_blank" rel="noopener noreferrer">
                <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
              </a>
              <a href="https://github.com/hschmid516" target="_blank" rel="noopener noreferrer">
                <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
              </a>
            </div>
            <img className="profile-pic" src={ henry } alt="Profile picture"></img>
            <p className="blurb">After 10 years in the environmental consulting and GIS mapping fields, I decided it was time to take a huge leap and become a software developer. While I enjoyed my previous roles and gained invaluable technical and interpersonal experience, the creativity and logical problem solving required was not quite on par with the potential I knew I had. Taking this leap was the best decision of my entire life, and I look forward to making an immediate impact for a mission-driven company.</p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">EZZEDINE ALWAFAI </p>
              <a href="https://www.linkedin.com/in/ealwafai/" target="_blank" rel="noopener noreferrer">
                <img className="linked-in" src={ linkedIn } alt="Link to LinkedIn page"/>
              </a>
              <a href="https://github.com/ealwafai" target="_blank" rel="noopener noreferrer">
                <img className="git-hub" src={ gitHub } alt="Link to GitHub page"/>
              </a>
            </div>
            <img className="profile-pic" src={ ezze } alt="Profile picture"></img>
            <p className="blurb">I am a software developer with a background in affordable lending, consumer finance, and corporate credit risk analysis. My curiosity to learn how things work under the hood has led me to pursue an education in back-end development at Turing School of Software and Design. Throughout my career, I’ve experienced numerous situations that required tackling complex problems by analyzing top priorities and working with diverse teams or individually towards our shared goal. I look forward to applying my skills to a purpose-driven, people-focused workplace while also expanding my technical proficiency to other coding languages as well. Please feel free to reach out to me here on LinkedIn or via email.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Creators;
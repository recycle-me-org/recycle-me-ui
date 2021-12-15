import './Creators.css';
import linkedIn from '../../assets/linkedin.png';
import gitHub from '../../assets/github.png';
import sarah from '../../assets/sarah.png';
import raquel from '../../assets/raquel.JPG';
import anthony from '../../assets/anthony.jpeg';
// import michael from '../../assets/michael.png';
// import henry from '../../assets/henry.png';
// import ezze from '../../assets/ezze.png';

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
              <img className="linked-in" src={ linkedIn } alt=""/>
              <img className="git-hub" src={ gitHub } alt=""/>
            </div>
            <img className="profile-pic" src={ sarah } alt=""/>
            <p className="blurb">Before Turing, I was working in oil & gas as a Landman. When Covid hit, I had a fortunate opportunity to reevaluate what I really wanted to do. I've always been inspired by technology and how it's changing the world we live in, so I decided to pursue software development. I am super curious by nature with a passion for innovation and challenging the status quo. I'm especially passionate about the potential technology has to better human lives. Connect with me on LinkedIn so we can a get a conversation started!</p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">RAQUEL HILL</p>
              <img className="linked-in" src={ linkedIn } alt=""/>
              <img className="git-hub" src={ gitHub } alt=""/>
            </div>
            <img className="profile-pic" src={ raquel } alt=""></img>
            <p className="blurb">I'm a driven and self-motivated entrepreneur turned Frontend Software Developer. My passions in life are my family and work. I try to think outside of the box because I believe that innovation is driven by creativity. My primary goal in life is to better myself through continuous learning and building on my successes. The world of software development is ever-changing and fulfills my ongoing quest for knowledge, creativity, and problem solving.</p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">ANTHONY IACONO</p>
              <img className="linked-in" src={ linkedIn } alt=""/>
              <img className="git-hub" src={ gitHub } alt=""/>
            </div>
            <img className="profile-pic" src={ anthony } alt=""></img>
            <p className="blurb">From deployment overseas to competition dance floors, the same curiosity and love of learning that defined my service as a soldier and teacher now fuel my creative work building impactful apps as a software engineer.</p>
          </article>
        </div>
        <div className="backend-container">
          <h2 className="backend">Backend</h2>
          <article className="member-container">
            <div>
              <p className="name">MICHAEL MATTSON</p>
              <img className="linked-in" src={ linkedIn } alt=""/>
              <img className="git-hub" src={ gitHub } alt=""/>
            </div>
            {/* <img className="profile-pic" src={ michael } alt=""/> */}
            <p className="blurb"></p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">HENRY SCHMID</p>
              <img className="linked-in" src={ linkedIn } alt=""/>
              <img className="git-hub" src={ gitHub } alt=""/>
            </div>
            {/* <img className="profile-pic" src={ henry } alt=""></img> */}
            <p className="blurb"></p>
          </article>
          <article className="member-container">
            <div>
              <p className="name">EZZEDINE ALWAFAI </p>
              <img className="linked-in" src={ linkedIn } alt=""/>
              <img className="git-hub" src={ gitHub } alt=""/>
            </div>
            {/* <img className="profile-pic" src={ ezze } alt=""></img> */}
            <p className="blurb"></p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Creators;
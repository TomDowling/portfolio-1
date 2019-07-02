import Head from "../Components/Layout/Markup/Head";
import Header from "../Components/Layout/Header/Header";
import DSModal from "../Components/Modules/Modal/DSModal";
import RCModal from "../Components/Modules/Modal/RCModal";
import RDModal from "../Components/Modules/Modal/RDModal";
import SCBFModal from "../Components/Modules/Modal/SCBFModal";
import Contact from "../Components/Forms/Contact";
import "../Styles/styles.scss";

export default () => (
	<div className="app homepage">
		<Head />
		<main>
		<nav>
  <span className="brand">
    <a href="#home">T</a>
  </span>
  <div className="menu">
    <a href="#home" className="active scroll-page"><i className="material-icons">home</i></a><br />
    <a href="#about" className="scroll-page"><i className="material-icons">account_circle</i></a><br />
    <a href="#skills" className="scroll-page"><i className="material-icons">settings</i></a><br />
    <a href="#works" className="scroll-page"><i className="material-icons">work</i></a><br />
    <a href="#contact" className="scroll-page"><i className="material-icons">mail</i></a><br />
  </div>
  <div className="social">
    <a href="https://github.com/RidhoBeteer" target="_blank"><i className="devicon-github-plain"></i></a><br />
    <a href="http://beteer.wpdevcloud.com" target="_blank"><i className="devicon-wordpress-plain"></i></a><br />
    <a href="https://twitter.com/ridhobeteer" target="_blank"><i className="devicon-twitter-plain"></i></a><br />
    <a href="https://www.facebook.com/ridho.beteer" target="_blank"><i className="devicon-facebook-plain"></i></a><br />
  </div>
</nav>
<section id="home">
  <div className="container">
    <h1 className="welcome">Hello!<br />I'm Tom.<br /> I <span className="pink">design</span> &amp; <span className="blue">build</span> <br />web applications</h1>
    <a href="#contact"><button className="scroll-page">Contact Me</button></a>
  </div>
</section>
<section id="about">
  <div className="container">
    <div className="text-container">
      <h2 className="blue">Little About Me</h2>
      <p>I'm Tom Dowling. A former Digital Marketing and Social Media apprentice at 3AAA. I created my first website when I was in 16 for an IT AS-Level task, a Flat HTML and CSS site for a fish and chip shop.</p>
    </div>
  </div>
</section>
<section id="skills">
  <div className="container">
    <div className="text-container">
      <h2 className="pink">Skill</h2>
      <p>Main area of my expertise is front end development and everything related with this side of web. HTML, CSS, JS. I also, am proficient at SASS and have a good understanding of GIT. I have a solid exposure to React and Next.Js with a few projects built in these frameworks. I am currently studying Redux in more detail.</p><br /> 
    </div>
  </div>
</section>
<section id="works">
  <div className="container">
    <h2 className="blue">Portfolio</h2>
    <DSModal />
    <RDModal /> 
    {/* 
    <RCModal />
    <SCBFModal />
    */}
  </div>
</section>
<section id="contact">
  <div className="container">
    <div className="form-container">
      <h2 className="pink">Get In Touch</h2>
      <Contact />
    </div>
  </div>
</section>
		</main>
	</div>
);

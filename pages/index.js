import Head from "../Components/Layout/Markup/Head";
import Header from "../Components/Layout/Header/Header";
import Modal from "../Components/Modules/Modal/Modal";
import Contact from "../Components/Forms/Contact";
import "../Styles/styles.scss";
import Link from "next/link";

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
    <a href="https://github.com/TomDowling/" target="_blank"><i className="devicon-github-plain"></i></a><br />
    <a href="https://www.linkedin.com/in/dowling-tom/" target="_blank"><i className="fab fa-linkedin"></i></a><br />
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
      <p>I'm Tom Dowling. A former Digital Marketing and Social Media apprentice at 3AAA. I created my first website when I was in 16 for an IT AS-Level task, a Flat HTML and CSS site for a fish and chip shop. Once I started my apprenticeship I was building websites withing Drupal 7/9 as the main CMS. going onto React in my recent years.</p>
    </div>
  </div>
</section>
<section id="skills">
  <div className="container">
    <div className="text-container">
      <h2 className="pink">Skill</h2>
      <p>The main area of my expertise is front end development and everything related to this side of development. HTML, CSS, JS. I also, am proficient at SASS and have a good understanding of GIT. I have a solid exposure to React and Next.Js with a few projects built in these frameworks. I am currently studying Redux in more detail.</p><br /> 
    </div>
  </div>
</section>
<section id="works">
  <div className="container">
    <h2 className="blue">Portfolio</h2>
    <div className="row">
    <Modal 
        title="Digital Space" 
        img="static/images/digital-space.png" 
        imgAlt="Digital Space Website Screenshot"
        summary="This is my own site that I use when I do freelancing work."
        link={[<Link><a href='https://digital-space.io/' target='_blank'>Digital Space</a></Link>]}
        date="July 2018"
        tags="Web Development, Hosting"
        key="1"
      />
      <Modal 
        title="Reece Dickinson" 
        img="static/images/reecedickinson.png" 
        imgAlt="Reece Dickinsons Website Screenshot"
        summary="RD is a client who needed a site to show of his own work. I created a flat HTML demo first followed"
        link={[<Link><a href='https://reecedickinson.co.uk/' target='_blank'>Reece Dickinson</a></Link>]}
        date="May 2018"
        tags="Web Development, Hosting, Grav CMS"
        key="2"
      />
      <Modal 
        title="Revlic" 
        img="static/images/revlic.png" 
        imgAlt="Revlic Website Screenshot"
        summary="This is a site I create for an up and coming app for Nightlife in London.  the Website is built in React (Next.JS) and consists of two pages."
        link={[<Link><a href='https://www.revlic.com/' target='_blank'>Revlic</a></Link>]}
        date="May 2019"
        tags="Web Design, Development, Hosting, React, Next.JS"
        key="3"
      />
      <Modal 
        title="South Coast Body Fitness" 
        img="static/images/southcoastbodyfitness.png" 
        imgAlt="South Coast Body Fitness Website Screenshot"
        summary="This is the first site I have created in Wordpress. Previously I used Drupal for sure solutions but thought I wouls try Wordpress with it being the most used CMS."
        link={[<Link><a href='https://southcoastbodyfitness.com/' target='_blank'>South Coast Body Fitness</a></Link>]}
        date="March 2019"
        tags="Web Design, Development, Hosting, Wordpress"
        key="4"
      />
    </div>
  </div>
</section>
<section id="contact">
  <div className="container">
    <div className="form-container">
      <h2 className="pink">Get In Touch</h2>
      {/* <Contact /> */}
      <br />
      <h3><Link><a href='mailto:tomodowling@outlook.com'><i className="fas fa-envelope-open"></i> tomodowling@outlook.com</a></Link></h3>
      <br />
      <h3><Link><a href='tel:+447805601727'><i className="fas fa-phone"></i> +447805601727</a></Link></h3>
    </div>
  </div>
</section>
		</main>
	</div>
);

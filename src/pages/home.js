import '../styles/home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/nav';
import { Link } from 'react-router-dom';
import guy from '../styles/assets/guy.png';
import gal from '../styles/assets/gal.png';

function Home() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come Back!";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    // used to move parallax text with scroll
    document.querySelector('.parallax-text').style.marginRight = value * 2 + 'px';
    document.querySelector('.guy').style.marginRight = value * -1.5 + 'px';
    document.querySelector('.guy').style.transform = "rotateZ(" + window.pageYOffset/5 + "deg)";
    document.querySelector('.gal').style.marginLeft = value * -1.5 + 'px';
    document.querySelector('.gal').style.transform = "rotateZ(" + -window.pageYOffset/5 + "deg)";
    //document.querySelector('.parallax-btn').style.bottom = value * 0.5 + 'px';
  })
  return (
    <div>
      <Header />
      <section className='parallax'>
        <h2 className='parallax-text'>Punjabi for All</h2>
        {/* <Link to="#section" className='parallax-btn neumorphism'>Explore</Link> */}
        <img src={guy} alt='guy' className='guy' />
        <img src={gal} alt='gal' className='gal' />
      </section>
      <div className="section">
          <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
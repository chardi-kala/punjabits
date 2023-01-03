import Home from "./home";
import "../styles/home.css";

function App() {
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
    document.querySelector('.parallax-btn').style.bottom = value * 0.5 + 'px';
  })
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;

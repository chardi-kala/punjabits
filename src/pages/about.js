import React from 'react';
import Header from '../components/nav';
import '../styles/about.css';

const data = [
  {
      "name": "Harpreet Kaur",
      "residence": "IN",
      "role": "Founder/Teacher",
      "description": "Founder of Punjabits.\n She is a teacher with 12 years of experience in the field",
      "image": require("../styles/assets/sevadaars/hkin.jpeg"),
      "social": {
          "website": "https://bit.ly/Punjabits",
          "linkedin": "https://www.linkedin.com/in/harpreetkaur143/",
          "youtube": "https://www.youtube.com/channel/UCXD5D7d6h4TsxXGAE9gRxbg"
      }
  },
  {
      "name": "Gulbarg Singh",
      "residence": "USA",
      "role": "Associate Member",
      "description": "Founding President of Global Sikh Council. Supporting member of Punjabits",
      "image": require("../styles/assets/sevadaars/gsusa.png"),
      "social": {
          "website": "https://globalsikhcouncil.org"
      }
  },
  {
      "name": "Gurmehar Singh",
      "residence": "AUS",
      "role": "Developer",
      "description": "Software Engineer at Khalis Foundation.\nDevelops mobile and web apps for Punjabits and provide IT support",
      "image": require("../styles/assets/sevadaars/gsau.jpg"),
      "social": {
          "github": "https://www.github.com/MySmilingTurban",
          "linkedin": "https://www.linkedin.com/in/chardikala/",
          "website": "https://bit.ly/GurmeharSingh"
      }
  },
  {
      "name": "Harpreet Kaur",
      "residence": "UK",
      "role": "Teacher",
      "description": "Organises weekly Punjabi Club in Sikhs of Sutton Coldfield group, UK where they learn Punjabi, culture, music, Sikh history in a fun way",
      "image": require("../styles/assets/sevadaars/hkuk.jpeg"),
      "social": {
          "facebook": "https://www.facebook.com/SikhsOfSuttonColdfield"
      }
  },
  {
      "name": "Harpreet Singh",
      "residence": "AUS",
      "role": "Teacher",
      "description": "Teaches Gurbani lessons @ Sikh Teachings group, Australia, to help become a better version of ourselves",
      "image": require("../styles/assets/sevadaars/hsau.jpeg"),
      "social": {
          "website": "https://www.sikhteachings.com"
      }
  },
  {
      "name": "Tejinder Singh",
      "residence": "IN",
      "role": "Wandering Teacher",
      "description": "Doing Punjabi Maa Boli parchaar since 18 years, and innovating tech in Punjabi",
      "image": require("../styles/assets/sevadaars/tsin.jpeg"),
      "social": {
          "facebook": "https://www.facebook.com/groups/287828135573931?ref=share",
          "instagram": "https://www.instagram.com/gurmukhikhzana"
      }
  },
  {
      "name": "Satender Singh",
      "residence": "IN",
      "role": "Animator",
      "description": "Creating animated wonders in Punjabi on Singh Wisdom YouTube channel",
      "image": require("../styles/assets/sevadaars/ssin.jpeg"),
      "social": {
          "youtube": "https://youtube.com/c/SinghWisdom"
      }
  },
  {
      "name": "Dr. Bikramjeet Kaur",
      "residence": "IN",
      "role": "Teacher",
      "description": "Organsises gurmat camps/events for Kids where she teaches Gurbani, Punjabi, and Sikh History in an awesome way",
      "image": require("../styles/assets/sevadaars/bkin.jpeg"),
      "social": {
          "youtube": "https://www.youtube.com/@GURMATCAMPKOHATENCLAVE"
      }
  },
  {
      "name": "Paramdeep Kaur",
      "residence": "IN",
      "role": "Calligraphy Teacher",
      "description": "Founder of Gursanjh Gurmat Group, organises events and workshop for kids and moms",
      "image": require("../styles/assets/sevadaars/pkin.jpeg"),
      "social": {
          "facebook": "https://www.facebook.com/groups/639891236574855"
      }
  }
];

function About() {
  const getSocial = (social) => {
    // convert json to list
    let socialList = Object.keys(social).map((key) => {
      return [key, social[key]];
    });
    // filter out empty values
    socialList = socialList.filter((item) => {
      return item[1] !== "";
    });
    // create list of social links
    return (
      <div className="socials">
        {
          socialList.map((item, index) => {
            return (
                <a href={item[1]}>{(item[0] === "website" ? <i class="fa-regular fa-earth-asia"></i> : <i className={`fab fa-${item[0]}`}></i>)}</a>
            )
        })}
      </div>
    )}
    
    return (
        <div className="wrapper aboutParallax">
          <Header style={{zIndex:-1}} />
          <h1>About Us</h1>
          <div className="about">
            <div className="aboutText">
              <p>
                Our vision is to be the premier destination for learning and promoting the Punjabi language and culture. We aim to provide high-quality, interactive education to people of all ages and backgrounds, and to foster a sense of community and pride among speakers of Punjabi. Through our efforts, we hope to preserve and celebrate this rich and vibrant language for generations to come. At our Punjabits, we envision a world where the beautiful and diverse culture of Punjab is celebrated and shared by all. We are dedicated to empowering individuals of all ages and backgrounds to learn and speak Punjabi with confidence and pride. Our interactive and immersive learning experiences aim to not only teach the language, but also to provide a deeper understanding and appreciation of Sikh history, literature, music, and art. By bringing people together through the language, we hope to create a vibrant community that celebrates and preserves the richness of Punjabi culture for future generations.
              </p>
            </div>
            <div className="aboutImage">
              <img src={require("../styles/assets/logo.png")} alt="about" />
            </div>
          </div>
          <h1>Our Team</h1>
          <div className="cols">
            {
              data.map((item, index) => {
                let id = item.name.split(" ").map((letter)=> letter[0].toLowerCase()).join("") + item.residence.toLowerCase();
                //set background-image based on id
                let element = document.getElementById(id);
                if (element) {
                  let imageHolder = element.firstElementChild.firstElementChild;
                  imageHolder.style.backgroundImage = `url(${item.image})`;
                }
                
                //.style.backgroundImage = `url(${item.image})`;
                return (
                  <div className="col" id={id}>
                    <div className="container">
                      <div className="front" style={{backgroundImage: item.image, backgroundSize: 'cover'}}>
                        <div className="inner">
                          <p>{item.name}</p>
                          <span>{item.role}📍{item.residence}</span>
                        </div>
                      </div>
                      <div className="back">
                        <div className="inner">
                          <p>{item.description}.</p>
                          {getSocial(item.social)}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
        </div>
    );
}

export default About;
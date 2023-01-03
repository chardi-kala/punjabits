// Gallery.js
import "../styles/gallery.css";
import React from 'react';
import ImgGallery from "../components/ImgGallery";
import Header from "../components/nav";

const images = [
  {
    src: require("../styles/assets/gallery/n1.jpeg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/n2.jpeg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/n3.jpeg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/n4.jpeg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/n5.jpeg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/n6.jpeg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/h1.jpg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/h2.jpg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/h3.jpg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/h4.jpg"),
    alt: ""
  },
  {
    src: require("../styles/assets/gallery/v1.jpg"),
    alt: ""
  },
    {
        src: require("../styles/assets/gallery/v2.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v3.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v4.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v5.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v7.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v8.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v9.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v10.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v11.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v12.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v13.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/v14.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/s1.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/s2.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/s3.jpg"),
        alt: ""
    },
    {
        src: require("../styles/assets/gallery/s4.jpg"),
        alt: ""
    }
];


function Gallery() {
       
      return (
        <div className="background">
            <Header style={{zIndex:-1}} />
            <ImgGallery images={images} />
       </div>
    );
}

export default Gallery;
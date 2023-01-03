import { useState } from "react";
import "../styles/ImgGallery.css";
import "../styles/gallery.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
 
const ImgGallery = ({images}) => {
    const [slideNumber, setSlideNumber] = useState();
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( images.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === images.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
    }

    return (
        <div>
            {openModal &&
                <div className="sliderWrap">
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={images[slideNumber].src} alt='' />
                    </div>
                </div>
            }
            <div className="gallery">
                {
                    images && images.map((slide, index) => {
                        return (
                            <div 
                                className="gallery-item" 
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img src={slide.src} alt='' className="image"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImgGallery;
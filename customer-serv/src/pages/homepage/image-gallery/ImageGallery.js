import React from 'react';
import Masonry from "react-responsive-masonry";
import img1 from "../../../assets/Images/gallery-img1.png";
import img2 from "../../../assets/Images/gallery-img2.jpg";
import img3 from "../../../assets/Images/gallery-img3.png";
import img4 from "../../../assets/Images/gallery-img4.jpg";
import img5 from "../../../assets/Images/gallery-img5.png";
import img8 from "../../../assets/Images/gallery-img8.jpg";
import img6 from "../../../assets/Images/gallery-img6.png";
import img7 from "../../../assets/Images/gallery-img7.jpg";
import img10 from "../../../assets/Images/gallery-img10.png";
import img9 from "../../../assets/Images/gallery-img9.png";
import img11 from "../../../assets/Images/gallery-img11.jpg";
import img12 from "../../../assets/Images/gallery-img12.jpg";




function ImageGallery() {
    const images=[
        {
            image: img1,
        },
        {
          image: img2,
      },
        {
          image: img3,
      },
      {
        image: img4,
    },
    {
      image: img5,
  },
  {
    image: img6,
},
{
  image: img7,
},
{
  image: img8,
},
{
  image: img9,
},
{
  image: img10,
},

{
  image: img11,
},

{
  image: img12,
}
    ]
  return (
   
    <div className='masonry-img '>
        <Masonry
        columnsCount={4} gutter="10px">
          {images.map(({image}, i) => {
         return (
            <img
            key={i}
            src={image}
            alt="img"
           
          />
           )
        
        }  
        )
        }
        </Masonry>
    </div>

  )
}

export default ImageGallery
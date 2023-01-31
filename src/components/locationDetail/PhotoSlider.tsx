import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {
  const { photoGallery } = props;  
  console.log(photoGallery);
  const photos = photoGallery.map((element:any) => (     
	<SplideSlide>
    <img src={element.image.url} height={400} width={500}/>
    <p>{element.description}</p>
	</SplideSlide>    
  ));
  return (
    <>
     
	  <Splide aria-label="Photo Slider" options={{
      rewind: true,
      width : '100%',
      gap   : '1rem',
      type: "loop",
      perPage: 4,
      perMove: 1
    }}>
      
          {photos}
      </Splide>
    </>
  );
};

export default PhotoSlider;
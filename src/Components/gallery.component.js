import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import g5 from '../images/g5.jpg';
import g6 from '../images/g6.jpg';
import g7 from '../images/g7.jpg';
import g8 from '../images/g8.jpg';
import g9 from '../images/g9.jpg';
import g10 from '../images/g10.jpg';
import g11 from '../images/g11.jpg';
import g12 from '../images/g12.jpg';
import g13 from '../images/g13.jpg';
import g14 from '../images/g14.jpg';
import g15 from '../images/g15.jpg';
import g16 from '../images/g16.jpg';
import g17 from '../images/g17.jpg';
import g18 from '../images/g18.jpg';
import g19 from '../images/g19.jpg';
import g20 from '../images/g20.jpg';
import g21 from '../images/g21.jpg';
import g22 from '../images/g22.jpg';
import g23 from '../images/g23.jpg';
import g24 from '../images/g24.jpg';
import g25 from '../images/g25.jpg';
import g26 from '../images/g26.jpg';
import g27 from '../images/g27.jpg';
import g28 from '../images/g28.jpg';
import g29 from '../images/g29.jpg';
import g30 from '../images/g30.jpg';

const images = [
  {
    original: g1,
    thumbnail: g1,
  },
  {
    original: g2,
    thumbnail: g2,
  },
  {
    original: g3,
    thumbnail: g3,
  },
  {
    original: g4,
    thumbnail: g4,
  },
  {
    original: g5,
    thumbnail: g5,
  },
  {
    original: g6,
    thumbnail: g6,
  },
  {
    original: g7,
    thumbnail: g7,
  },
  {
    original: g8,
    thumbnail: g8,
  },
  {
    original: g9,
    thumbnail: g9,
  },
  {
    original: g10,
    thumbnail: g10,
  },
  {
    original: g11,
    thumbnail: g11,
  },
  {
    original: g12,
    thumbnail: g12,
  },
  {
    original: g13,
    thumbnail: g13,
  },
  {
    original: g14,
    thumbnail: g14,
  },
  {
    original: g15,
    thumbnail: g15,
  },
  {
    original: g16,
    thumbnail: g16,
  },
  {
    original: g17,
    thumbnail: g17,
  },
  {
    original: g18,
    thumbnail: g18,
  },
  {
    original: g19,
    thumbnail: g19,
  },
  {
    original: g20,
    thumbnail: g20,
  },
  {
    original: g21,
    thumbnail: g21,
  },
  {
    original: g22,
    thumbnail: g22,
  },
  {
    original: g23,
    thumbnail: g23,
  },
  {
    original: g24,
    thumbnail: g24,
  },
  {
    original: g25,
    thumbnail: g25,
  },
  {
    original: g26,
    thumbnail: g26,
  },
  {
    original: g27,
    thumbnail: g27,
  },
  {
    original: g28,
    thumbnail: g28,
  },
  {
    original: g29,
    thumbnail: g29,
  },
  {
    original: g30,
    thumbnail: g30,
  }
];

export default class Gallery extends Component{
	render() {
    	return <ImageGallery items={images} />;
  	}
} 
import React, { useRef, useState } from 'react';
import './list.scss';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';

export default function List( { list }) {
    const listRef = useRef();
    const [ slideNumber, setSlideNumber] = useState(0);
    const [ isMoved, setIsMoved ] = useState(false);
    
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "right" && slideNumber < 10) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined 
           className='sliderArrow left'
           onClick={() => handleClick("left")}
           style={{ display: !isMoved && 'none' }}
           />
          <div className="container" ref={listRef}>
           {list.results?.map((movie, i) => (
              <ListItem movie={movie} index={i} key={movie.id} />
           ))}
          </div>
          <ArrowForwardIosOutlined 
          className='sliderArrow right' 
          onClick={() => handleClick("right")}
          />
        </div>
    </div>
  )
}

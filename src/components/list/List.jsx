import React, { useRef, useState } from 'react';
import './list.scss';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';

export default function List() {
    const listRef = useRef();
    const [ slideNumber, setSlideNumber] = useState(0);
    const [ isMoved, setIsMoved ] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "right" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "left" && slideNumber < 5) {
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
           />
          <div className="container" ref={listRef}>
           <ListItem index={0}/>
           <ListItem index={1}/>
           <ListItem index={2}/>
           <ListItem index={3}/>
           <ListItem index={4}/>
           <ListItem index={5}/>
           <ListItem index={6}/>
           <ListItem index={7}/>
           <ListItem index={8}/>
           <ListItem index={9}/>
          </div>
          <ArrowForwardIosOutlined 
          className='sliderArrow right' 
          onClick={() => handleClick("right")}
          style={{ display: !isMoved && 'none' }}/>
        </div>
    </div>
  )
}

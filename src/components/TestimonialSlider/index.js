import React, { useState } from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { 
  Container, 
  TextsBox, 
  ImageBox, 
  SvgDetailBox, 
  NextPrevBox } from './styles';

import {users} from './users.mock';

function TestimonialSlider() {

  const [firstUser] = users;
  const [currentUser, setCurrentUser] = useState(firstUser);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const handleSlideChange = position => {
    const totalUsers = users.length;
    
    if(position + 1 > totalUsers){
      position = 0;
    }
    if(position < 0) {
      position = totalUsers - 1;
    }
    console.log(position);
    const newUser = users[position];
    setCurrentUser(newUser);
    setCurrentUserIndex(position);
  }

  return <Container>
    <ImageBox>
      <img  
        className="user-pic" 
        alt={currentUser.name} 
        src={`/${currentUser.picture}`}
      />
      <NextPrevBox>
        <button 
          type="button" 
          onClick={() => handleSlideChange(currentUserIndex - 1)}
        >
          <MdChevronLeft/>
        </button>
        <button 
          type="button"
          onClick={() => handleSlideChange(currentUserIndex + 1)}
        >
          <MdChevronRight />
        </button>
      </NextPrevBox>
    </ImageBox>
    <TextsBox>
      <p>{currentUser.description}</p>
      <p className="user-name">{currentUser.name}</p>
      <span className="user-role">{currentUser.role}</span>
    </TextsBox>
    <SvgDetailBox />
    
  </Container>;
}

export default TestimonialSlider;
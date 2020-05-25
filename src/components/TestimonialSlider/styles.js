import styled from 'styled-components';
import imagebg from '../../assets/pattern-bg.svg';
import textbg from '../../assets/pattern-quotes.svg';
import detailbg from '../../assets/pattern-curve.svg';

export const Container = styled.div`
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto 0;

  @media screen and (min-width: 1024px){
    background-color: #fff;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    min-width: 850px;
  }
`;

export const ImageBox = styled.div`
  background: url(${imagebg}) no-repeat top;
  background-size: auto 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  position: relative;

  .user-pic {
    width: 220px;
    height: auto;
    border-radius: 4px;
    box-shadow: -5px 16px 44px -6px hsl(240, 18%, 77%);
  }

  @media screen and (min-width: 1024px){
    order: 1;
    background-size: auto 400px;
    background-position: center;
    padding: 0;
    height: 422px;
    padding: 0 90px;
    
    .user-pic {
      width: 300px;
    }
  }
`;

export const NextPrevBox = styled.div`
  background: #fff;
  width: 68px;
  height: 34px;
  position: absolute;
  bottom: 17px;
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 3px 3px 10px hsl(240, 18%, 77%);

  button {
    background: none;
    border: none;
    outline: 0;
  }
  
  svg {
    font-size: 25px;
    color: #999;
  }

  @media screen and (min-width: 1024px){
    bottom: 42px;
    left: 105px;
    z-index: 10;
  }
`;

export const TextsBox = styled.div`
  text-align: center;
  background: url(${textbg}) no-repeat top;
  background-size: 55px 50px;
  padding: 30px 10px 0;
  margin-top: 20px;

  p, span {
    font-size: 16px;
    line-height: 20px;
    color: #444;
    font-weight: 300;
    display: block;
  }

  .user-name {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-top: 25px;
  }

  .user-role {
    color: #ccc;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1024px){
    text-align: left;
    background-position: 163px 2px;
    padding-left: 90px;
    position: absolute;
    left: 0;

    p, span {
      font-size: 22px;
      line-height: 26px;
    }

    p {
      width: 424px;
    }

    .user-name, .user-role {
      display: inline;
    }

    .user-name {
      margin-right: 5px;
    }
  }
`;

export const SvgDetailBox = styled.div`
  background: url(${detailbg}) no-repeat top;
  background-size: 100% auto;
  width: 100%;
  height: 70px;
  margin-top: 10px;
  @media screen and (min-width: 1024px){
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 40vw;
  }
`;



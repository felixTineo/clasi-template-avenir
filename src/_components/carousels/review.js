import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import 'pure-react-carousel/dist/react-carousel.es.css';

const RevieweCont = styled.div`
  position: relative;
  padding: 2rem;
  //background-color: ${props => props.theme.main.primaryColor};
  //color: ${props => props.theme.main.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  @media(min-width: 768px){
    //flex-direction: row;
    min-height: 50vh;
    align-items: center;
    justify-content: space-around;
  }
`
const ReviewInnerCont = styled.div`
  @media(min-width: 768px){
    width: 50%;
  }
`
const ReviewAuthor = styled.p`
  font-weight: bold;
  text-align: center;
`
const ReviewDescription = styled.p`
  text-align: center;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const DotsCont = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
`
const QuotationCont = styled.div` 
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .12) ,
              1px 2px 2px rgba(0, 0, 0, .12) ,
              1px 4px 4px rgba(0, 0, 0, .12) ,
              1px 8px 8px rgba(0, 0, 0, .12) ;
`

const StyledDot = styled(Dot)`
  height: 2px;
  width: 2rem;
  //border-radius: 50%;
  border: none;
  transition: 250ms ease;
  background-color: #e4e4e4;
  &:nth-child(2n - 1){
    margin: 0 1rem;
  }
  &:disabled{
    background-color: ${props => props.theme.main.primaryColor};
  }
`
const QuoteImg = styled.img`

`
const StyledBack = styled(ButtonBack)`
  position: absolute;
  top: 50%;
  left: 15%;
  background: transparent;
  border: none;
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.5rem;
  transition: 250ms ease;
  &:hover{
    filter: brightness(1.1);
  }
`
const StyledNext = styled(ButtonNext)`
  position: absolute;
  top: 50%;
  right: 15%;
  background: transparent;
  border: none;
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.5rem;
  transition: 250ms ease;
  &:hover{
    filter: brightness(1.1);
  }  
`

const Review = ({ id, review, author }) => {
  return(
    <RevieweCont>
{/*      <QuotationCont>
        <SvgCont width="17" height="12" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.70215 12C2.68087 12 1.80143 11.6454 1.06384 10.9362C0.35462 10.1986 0 9.31915 0 8.29787C0 7.78723 0.0851284 7.33333 0.255341 6.93617C0.425554 6.51064 0.695046 6.02837 1.06384 5.48936L4.76596 0L7.2766 1.65958L5.10639 4.97872C5.75887 5.23404 6.29788 5.65957 6.72342 6.25532C7.14895 6.8227 7.36172 7.50355 7.36172 8.29787C7.36172 9.31915 7.00709 10.1986 6.29787 10.9362C5.58865 11.6454 4.72343 12 3.70215 12ZM13.0213 12C12 12 11.1206 11.6454 10.383 10.9362C9.67376 10.1986 9.31917 9.31915 9.31917 8.29787C9.31917 7.78723 9.40427 7.33333 9.57448 6.93617C9.7447 6.51064 10.0142 6.02837 10.383 5.48936L14.0851 0L16.5957 1.65958L14.4255 4.97872C15.078 5.23404 15.617 5.65957 16.0426 6.25532C16.4681 6.8227 16.6809 7.50355 16.6809 8.29787C16.6809 9.31915 16.3263 10.1986 15.617 10.9362C14.9078 11.6454 14.0426 12 13.0213 12Z"/>
        </SvgCont>
</QuotationCont>*/}
      <ReviewInnerCont>
        <ReviewAuthor>
          {author}
        </ReviewAuthor>        
        <ReviewDescription>
          {review}
        </ReviewDescription>
      </ReviewInnerCont>
    </RevieweCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.home.reviews.items;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <StyledBack>
            <LeftCircleFilled />
          </StyledBack>
          <StyledNext>
            <RightCircleFilled />
          </StyledNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <DotsCont>
          {
              Array(items.length).fill(0).map((_,i) => <StyledDot /*style={{ backgroundColor: color }} className="carousel-text-dot"*/ key={i} slide={i} />)
          }         
          </DotsCont>
        </CarouselProvider>
      </Visible>
    </Fragment>
  )
}
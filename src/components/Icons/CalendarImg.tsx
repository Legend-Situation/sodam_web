import React from "react";
import imgSrc from '@/assets/calendarImg.svg';

const CalendarImg = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'calendarImg'} {...props} />
);

export default CalendarImg;

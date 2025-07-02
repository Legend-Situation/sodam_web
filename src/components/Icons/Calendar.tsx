import React from "react";
import imgSrc from '@/assets/calendar.svg';

const Calendar = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={imgSrc} alt={props.alt ?? 'calendar'} {...props} />
);

export default Calendar;

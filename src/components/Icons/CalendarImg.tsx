import imgSrc from '@/assets/calendarImg.svg';

const CalendarImg = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'calendarImg'} {...props} />
);

export default CalendarImg;

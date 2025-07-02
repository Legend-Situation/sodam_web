import imgSrc from '@/assets/calendar.svg';

const Calendar = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'calendar'} {...props} />
);

export default Calendar;

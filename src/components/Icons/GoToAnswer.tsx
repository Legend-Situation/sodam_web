import imgSrc from '@/assets/goToAnswer.svg';

const GoToAnswer = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'goToAnswer'} {...props} />
);

export default GoToAnswer;

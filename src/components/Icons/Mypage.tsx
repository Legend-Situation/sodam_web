import imgSrc from '@/assets/mypage.svg';

const Mypage = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'mypage'} {...props} />
);

export default Mypage;

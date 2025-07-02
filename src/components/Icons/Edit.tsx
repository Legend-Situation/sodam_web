import imgSrc from '@/assets/edit.svg';

const Edit = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'edit'} {...props} />
);

export default Edit;

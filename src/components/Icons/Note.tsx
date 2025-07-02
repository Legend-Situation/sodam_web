import imgSrc from '@/assets/note.svg';

const Note = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'note'} {...props} />
);

export default Note;

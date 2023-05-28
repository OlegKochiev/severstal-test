interface Props {
  isOpen: boolean;
  title: string;
}

export default function CollapsibleHeader({isOpen, title}: Props) {
  return (
    <>
      <h2>{title}</h2>
      {isOpen ? (
        <svg width="15px" id="Layer_1" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M82.7,74.6c-1.1,0-2.2-0.4-3-1.3L50.1,43l-30,30c-1.6,1.6-4.3,1.6-6,0l-3.7-3.7c-1.6-1.7-1.6-4.3,0-6l36.8-36.8   c0.3-0.3,0.6-0.5,1-0.7c0.1,0,0.2-0.1,0.2-0.1l0.2-0.1c0.2-0.1,0.4-0.1,0.7-0.2c0.6-0.1,1.1-0.1,1.6,0c0.1,0,0.2,0,0.3,0.1   c0.7,0.2,1.4,0.6,1.9,1.1l36.3,37.2c0.8,0.8,1.2,1.9,1.2,3c0,1.1-0.5,2.2-1.3,3l-3.8,3.7C84.9,74.2,83.8,74.6,82.7,74.6z    M50.2,40.2l31,31.8c0.8,0.9,2.3,0.9,3.1,0l3.8-3.7c0.9-0.9,0.9-2.3,0-3.1L51.8,28c-0.3-0.3-0.6-0.5-1-0.6c-0.1,0-0.1,0-0.1,0   l-0.1,0c-0.2,0-0.5,0-0.8,0c-0.1,0-0.2,0.1-0.3,0.1c0,0-0.1,0-0.1,0.1l-0.1,0c-0.2,0.1-0.4,0.2-0.5,0.4l-1.1,1L11.9,64.7   c-0.9,0.9-0.9,2.3,0,3.1l3.7,3.7c0.9,0.9,2.3,0.9,3.1,0L50.2,40.2z" />
          </g>
        </svg>
      ) : (
        <svg width="15px" id="Layer_1" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M49.7,74.6c-0.3,0-0.5,0-0.7-0.1c-0.1,0-0.2,0-0.3-0.1c-0.7-0.2-1.4-0.6-1.9-1.1L10.5,36.2c-0.8-0.8-1.2-1.9-1.2-3   c0-1.1,0.5-2.2,1.3-3l3.8-3.7c1.7-1.6,4.3-1.6,6,0.1L49.9,57l30-30c1.6-1.6,4.3-1.6,6,0l3.7,3.7c1.6,1.7,1.6,4.3,0,6L52.7,73.5   c-0.3,0.3-0.6,0.5-1,0.7c-0.1,0-0.2,0.1-0.2,0.1l-0.2,0.1c-0.2,0.1-0.4,0.1-0.7,0.2C50.3,74.6,50,74.6,49.7,74.6z M17.3,27.4   c-0.6,0-1.1,0.2-1.5,0.6l-3.8,3.7c-0.9,0.9-0.9,2.3,0,3.1L48.2,72c0.3,0.3,0.6,0.5,1,0.6c0.1,0,0.1,0,0.1,0l0.1,0   c0.2,0,0.5,0,0.8,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1,0,0.1-0.1l0.1,0c0.2-0.1,0.4-0.2,0.5-0.4l1.1-1l35.7-35.7c0.9-0.9,0.9-2.3,0-3.1   l-3.7-3.7c-0.9-0.9-2.3-0.9-3.1,0L49.8,59.8L18.8,28C18.4,27.6,17.8,27.4,17.3,27.4z" />
          </g>
        </svg>
      )}
    </>
  );
}
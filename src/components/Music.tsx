import useSound from 'use-sound';
import Sound from '../../music/Chamberlain - Declaration Of War.ogg';

const Music = () => {
  const [play] = useSound(Sound);

  return (
    <>
      <button onClick={() => play()}>Play</button>
    </>
  );
};

export default Music;

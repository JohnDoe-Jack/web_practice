import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

/* エラーテキスト */
const ErrorText = () => (
  <p className="App-error-text">geolocation IS NOT available</p>
);

const Location = () => {
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  // useEffectが実行されているかどうかを判定するために用意しています
  const isFirstRef = useRef(true);

  const [coordinates, setCoordinates] = useState(null);

  /*
   * ページ描画時にGeolocation APIが使えるかどうかをチェックしています
   * もし使えなければその旨のエラーメッセージを表示させます
   */
  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };
  const handleGeocode = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.YAHOO_API
        }`
      );
      console.log(response.data);
      setCoordinates(response.data);
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
    }
  };

  // useEffect実行前であれば、"Loading..."という呼び出しを表示させます
  if (isFirstRef.current) return <div className="App">Loading...</div>;

  return (
    <div className="App">
      <p>Geolocation API Sample</p>
      {!isFirstRef && !isAvailable && <ErrorText />}
      {isAvailable && (
        <div>
          <button onClick={getCurrentPosition}>Get Current Position</button>
          <br />
          <button
            onClick={() => handleGeocode(34.86271544710158, 135.68093024881938)}
          >
            Get Geocode
          </button>
          <br />
          latitude: {position.latitude}
          <br />
          longitude: {position.longitude}
          <br />
          <div>
            {coordinates && (
              <p>Address: {coordinates.Feature[0].Property.Address}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;

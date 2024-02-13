import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Location from './components/Location';
import NotFound from './components/NotFound';
import Header from './components/Header';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <h1>webの練習部屋</h1>
          <Link to="/">現在位置</Link>
          <br />
          <Link to="/about">音楽再生</Link>
          <br />
          <Routes>
            <Route path="/" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          {/*<Footer />}*/}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import Achievement from './components/Achievement';
import Adver from './components/Adver';
import ClassWrap from './components/ClassWrap';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Achievement />
      <div className="classes__header">
        Free Video Lectures From Class 6-12th
      </div>
      <ClassWrap />
      <ClassWrap />
      <ClassWrap />
      <ClassWrap />
      <Adver />
      <Footer />
    </>
  );
}

export default App;

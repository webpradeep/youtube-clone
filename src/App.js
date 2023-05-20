
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContext } from './context/contextApi';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchResults from './components/SearchResults';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route exact path='/searchResult/:searchQuery' element={<SearchResults />} />
            <Route exact path='/video/:id' element={<VideoDetails />} />

          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;

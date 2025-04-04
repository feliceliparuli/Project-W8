import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import TvShows from "./components/TvShows";
import MyMoovie from "./components/MyMoovie";

function App() {
  return (
    <div className="bg-dark text-white d-flex flex-column min-vh-100">
      <MyNavbar />
      <main className="flex-grow-1">
        <div className="container-xl px-4 px-md-5">
          <TvShows />
          <MyMoovie saga="Fast & Furious" />
          <MyMoovie saga="Avengers" />
          <MyMoovie saga="Harry Potter" />
        </div>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;

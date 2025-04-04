import { Component } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";

class MyMoovies extends Component {
  state = {
    movies: [],
    loading: true,
    error: "",
  };

  componentDidMount() {
    const saga = this.props.saga;
    const apiKey = "112e0711";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
      saga
    )}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Il server non risponde");
        }
      })
      .then((data) => {
        if (data.Response === "True") {
          console.log("film", data);
          this.setState({
            movies: data.Search,
            loading: false,
            error: "",
          });
        } else {
          this.setState({
            error: data.Error,
            loading: false,
          });
        }
      })
      .catch(() => {
        this.setState({
          error: "Errore nella connessione al server",
          loading: false,
        });
      });
  }

  //  carosello
  chunkMovies(movies, size) {
    const gruppi = [];
    for (let i = 0; i < movies.length; i += size) {
      gruppi.push(movies.slice(i, i + size));
    }
    return gruppi;
  }

  render() {
    const { saga } = this.props;
    const { movies, loading, error } = this.state;
    const gruppi = this.chunkMovies(movies, 5);
    const carouselId = `carousel-${saga.replace(/\s+/g, "-").toLowerCase()}`;

    return (
      <Container fluid className="my-5 p-0">
        <h3 className="text-light mb-3">{saga}</h3>

        {loading && (
          <div className="d-flex justify-content-center py-4">
            <Spinner animation="border" variant="light" />
          </div>
        )}

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <div
            id={carouselId}
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              {gruppi.map((group, i) => (
                <div
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  key={i}
                >
                  <div className="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-2">
                    {group.map((movie) => (
                      <div className="col" key={movie.imdbID}>
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="w-100 rounded shadow-sm"
                          style={{
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {gruppi.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        )}
      </Container>
    );
  }
}

export default MyMoovies;

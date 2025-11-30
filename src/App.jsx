import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { genres } from "../data";
import { fetchPodcasts } from "./api/fetchPodcast";

/**
 * Root application component.
 *
 * Responsible for:
 * - fetching podcast data on initial mount
 * - managing loading / error / data state
 * - rendering the correct view (loading, error, empty, or grid)
 *
 * @returns {JSX.Element} App component.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch podcasts once on mount
  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  const hasData = !loading && !error && podcasts.length > 0;
  const isEmpty = !loading && !error && podcasts.length === 0;

  return (
    <>
      <Header />

      <main className="app-main">
        {loading && (
          <p className="app-status app-status--loading">Loading podcasts…</p>
        )}

        {error && (
          <p className="app-status app-status--error">
            Sorry, something went wrong: <span>{error}</span>
          </p>
        )}

        {isEmpty && (
          <p className="app-status app-status--empty">
            No podcasts found. Please try again later.
          </p>
        )}

        {hasData && <PodcastGrid podcasts={podcasts} genres={genres} />}
      </main>
    </>
  );
}

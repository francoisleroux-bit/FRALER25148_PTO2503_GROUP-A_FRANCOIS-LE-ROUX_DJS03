import { useMemo } from "react";
import PropTypes from "prop-types";
import PodcastCard from "./PodcastCard";

/**
 * Renders the responsive grid of podcast previews.
 *
 * @param {Object} props
 * @param {Object[]} props.podcasts - Array of PREVIEW objects.
 * @param {Object[]} props.genres - Local genre data array.
 * @returns {JSX.Element} Grid section.
 */
export default function PodcastGrid({ podcasts, genres }) {
  // Build a Map for quick id -> title lookups
  const genreMap = useMemo(() => {
    const map = new Map();
    genres.forEach((g) => map.set(g.id, g.title));
    return map;
  }, [genres]);

  return (
    <section className="podcast-grid">
      <div className="podcast-grid__header">
        <h2 className="podcast-grid__title">Browse all shows</h2>
        <p className="podcast-grid__count">
          {podcasts.length} podcast{podcasts.length === 1 ? "" : "s"} available
        </p>
      </div>

      <div className="podcast-grid__list">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} genreMap={genreMap} />
        ))}
      </div>
    </section>
  );
}

PodcastGrid.propTypes = {
  podcasts: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

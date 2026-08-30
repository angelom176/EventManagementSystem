import Link from "next/link";
import "./page.css";

export default function HomePage() {
  return (
    <main className="home">

      <section className="hero">

        <p className="season">
          Discover What's Happening
        </p>

        <h1 className="hero-title">
          Find Your Next
          <br />

          <span className="highlight">
            Great Experience
          </span>
        </h1>

        <p className="hero-description">
          Explore concerts, sports, conferences, festivals, workshops and more.
          Find events that match your interests and book your place in just a few clicks.
        </p>

        <div className="buttons">

          <Link
            href="/events"
            className="primary-button"
          >
            Explore Events
          </Link>

          <Link
            href="/register"
            className="secondary-button"
          >
            Create Account
          </Link>

        </div>

      </section>

      <section className="stats">

        <div className="stats-container">

          <div>
            <div className="stat-number">100+</div>
            <div className="stat-text">
              Events Available
            </div>
          </div>

          <div>
            <div className="stat-number">10+</div>
            <div className="stat-text">
              Event Categories
            </div>
          </div>

          <div>
            <div className="stat-number">24/7</div>
            <div className="stat-text">
              Easy Online Booking
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
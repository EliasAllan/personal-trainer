import { motion } from "framer-motion";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="hero-text">
          <h1>Train with Heart. Transform for Life.</h1>
          <p>
            Personal training that empowers every generation — from seasoned
            lifters to first-time movers.
          </p>
          <div className="hero-buttons">
            <a href="/book"><button>Book a Session</button></a>
            <a href="/stories"><button className="outline">View Success Stories</button></a>
          </div>
        </div>
        <div className="hero-image-bg"></div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        className="trust"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="trust-item">
          <h3>💪 Family-Owned & Operated</h3>
        </div>
        <div className="trust-item">
          <h3>🧠 Certified & Personalized Plans</h3>
        </div>
        <div className="trust-item">
          <h3>🧓 Age-Inclusive Training</h3>
        </div>
      </motion.section>

      {/* Bio Preview */}
      <motion.section
        className="bio-preview"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bio-card">
          <img src="/public/assets/allan-home.jpg" alt="Allan" />
          <h4>Allan Elias</h4>
          <p>Certified Personal Trainer. Transformation Coach.</p>
        </div>
        <div className="bio-card">
          <img src="/public/assets/marie-home.jpg" alt="Mom" />
          <h4>Marie Street</h4>
          <p>Strength & Wellness Mentor. Age-Friendly Fitness Expert.</p>
        </div>
        <a href="/about" className="bio-link">Read More →</a>
      </motion.section>

      {/* Testimonials */}
      {/* <motion.section
        className="testimonials"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2>What Our Clients Say</h2>
        <blockquote>
          “Training with Allan and his mom has been one of the most inspiring
          things I’ve ever done. I feel stronger at 60 than I did at 30.”
        </blockquote>
        <cite>— Placeholder</cite>
      </motion.section> */}

      {/* Footer CTA */}
      <motion.section
        className="footer-cta"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2>Ready to transform?</h2>
        <a href="/book"><button>Book Your Session</button></a>
      </motion.section>
    </div>
  );
}

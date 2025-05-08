import { motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      {/* Mom Section */}
      <motion.div
        className="about-section"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src="/public/assets/marie.jpg" alt="Mom" className="about-image mom-image" />
        <div className="about-text">
          <h2>Marie Street</h2>
          <p>
            I’m a certified personal trainer with a passion for movement and healthy
            living. I help others realize their strength no matter their age!
          </p>
        </div>
      </motion.div>

      {/* Allan Section */}
      <motion.div
        className="about-section reverse"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="about-text">
          <h2>Allan Elias</h2>
          <p>
            I’m a fitness enthusiast dedicated to helping people feel
            strong, confident, and supported in every step of their journey.
          </p>
        </div>
        <img src="/public/assets/allan-deadlift.jpg" alt="Allan" className="about-image" />
      </motion.div>
    </div>
  );
}

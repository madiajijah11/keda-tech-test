import Navbar from "../../components/Navbar";
import Images01 from "../../assets/images/undraw_Setup_analytics_re_foim.png";
import Images02 from "../../assets/images/undraw_Task_re_wi3v.png";
import Images03 from "../../assets/images/undraw_Visionary_technology_re_jfp7.png";
import "./home.scss";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />
      <section className="first-section">
        <div className="main-header">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="main-header-left"
          >
            <h1>Manage your business with a simple and efficient tool</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis vero est illo fugit aliquam error id a omnis labore
              debitis, perferendis, accusamus natus voluptatum odio eveniet!
              Expedita nemo temporibus dolorem.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="main-header-right"
          >
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={Images01}
              alt="Section Image"
            />
          </motion.div>
        </div>
      </section>
      <section className="second-section" id="ABOUT">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          className="second-section-header"
        >
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vero est illo fugit aliquam error id a omnis labore debitis,
            perferendis, accusamus natus voluptatum odio eveniet! Expedita nemo
            temporibus dolorem.
          </p>
        </motion.div>
        <div className="second-section-content">
          <div className="second-section-content-left">
            <div className="content-left-img">
              <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={Images02}
                alt="Mission Image"
              />
            </div>
            <div className="content-left">
              <h1>Our mission</h1>
              <motion.p whileInView={{ x: [100, -0], opacity: [0, 1] }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex
                natus omnis provident? Dolorem recusandae at quas impedit nam,
                adipisci natus architecto odit, officiis aperiam minus ducimus
                tempora vitae ab.
              </motion.p>
              <motion.p whileInView={{ x: [100, -0], opacity: [0, 1] }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex
                natus omnis provident? Dolorem recusandae at quas impedit nam,
                adipisci natus architecto odit, officiis aperiam minus ducimus
                tempora vitae ab.
              </motion.p>
            </div>
          </div>
          <div className="second-section-content-right">
            <div className="content-right">
              <h1>Our vision</h1>
              <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                quas veniam suscipit veritatis, doloremque laboriosam id aliquam
                alias reiciendis esse sapiente impedit illo quos harum fugit,
                porro distinctio explicabo deserunt?
              </motion.p>
              <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex
                natus omnis provident? Dolorem recusandae at quas impedit nam,
                adipisci natus architecto odit, officiis aperiam minus ducimus
                tempora vitae ab.
              </motion.p>
            </div>
            <div className="content-right-img">
              <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={Images03}
                alt="Vision Image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="third-section" id="PRICING">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          className="third-section-header"
        >
          <h1>Pricing</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto eum
            ipsam unde expedita animi dicta explicabo impedit, quas veritatis
            perferendis? Ad aut, qui enim porro maxime ut officiis quod error?
          </p>
        </motion.div>
        <div className="card-container">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "cyan" }}
            transition={{ duration: 0.5, type: "tween" }}
            className="card"
          >
            <div className="card-header">
              <h2>TIER 1/Basic</h2>
            </div>
            <div className="card-content">
              <div className="price">
                <h1>Rp. 300.000</h1>
                <h2>/per bulan</h2>
              </div>
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "cyan" }}
            transition={{ duration: 0.5, type: "tween" }}
            className="card"
          >
            <div className="card-header">
              <h2>TIER 2/Business</h2>
            </div>
            <div className="card-content">
              <div className="price">
                <h1>Rp. 500.000</h1>
                <h2>/per bulan</h2>
              </div>
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "cyan" }}
            transition={{ duration: 0.5, type: "tween" }}
            className="card"
          >
            <div className="card-header">
              <h2>TIER 3/Entrepreneur</h2>
            </div>
            <div className="card-content">
              <div className="price">
                <h1>Rp. 700.000</h1>
                <h2>/per bulan</h2>
              </div>
              <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
                <li>Export data ke Excel</li>
                <li>AI Prediksi penghasilan</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="fourth-section" id="CONTACT">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          className="fourth-section-header"
        >
          <h1>Contact us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message"
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </motion.div>
      </section>
    </>
  );
}

export default Home;

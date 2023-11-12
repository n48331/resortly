import { useState } from "react";
import { BsWhatsapp ,BsFillCalendar2WeekFill} from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {HiOutlinePhone} from "react-icons/hi"
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaBuilding, FaStar, FaQuestion, FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import VisibilitySensor from "react-visibility-sensor";


const container = {
  hide: {},
  show: {
    transition: {
      delay: 1,
      type: "spring",
      duration: 0.15,
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hide: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", mass: 1 } },
};

const menu = {
  hide: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      staggerChildren: 0.05,
    },
  },
};

const menuItem = {
  hide: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", mass: 1 } },
};
function waLink() {
  let url = "https://api.whatsapp.com/send?";
  let params = new URLSearchParams("");
  params.append("phone", "918136927418");
  params.append(
    "text",
    "Hi, Just saw your website. I'd like to know more about the booking!"
  );
  return url + params.toString();
}
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [contact, setContact] = useState(false);




  return (
    <div>
      <motion.nav
        variants={container}
        initial="hide"
        animate="show"
        className={styles["navbar"]}
      >
        <VisibilitySensor>
          {({ isVisible }) => (
            <Link href="/" passHref>
              <motion.div
                className="cursor-pointer"
                variants={item}
                height="auto"
              >
                <h3>Resortly</h3>
                {isVisible ? setContact(false) : setContact(true)}
              </motion.div>
            </Link>
          )}
        </VisibilitySensor>
        <motion.span
          className={styles["menu-icon-wrapper"]}
          variants={item}
          onClick={() => setShowMenu(true)}
        >
          <IoMdMenu className={styles["menu-icon"]} />
        </motion.span>

        <ul className={styles["links-list"]}>
          <motion.li variants={item}>
            <Link href="/about">
              About us
            </Link>
          </motion.li>

      

          <motion.li variants={item}>
            <Link href="/#faqs">
             FAQs
            </Link>
          </motion.li>
        </ul>
        <Link
          href='tel:+917022473637'
          target="_blank"
          rel="noopener noreferrer"
          className={styles["button"]}
        >
          <motion.button className={styles["talk-button"]}>
            <HiOutlinePhone className={styles["icon-phone"]}/>
            <div className={styles["inner-phone"]} >
            <p>Call :<span>+91 - 81369 27418</span> </p>
        </div>
          </motion.button>
        
        </Link>
        
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </motion.nav>
      <Link
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={styles["button"]}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={contact ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          variants={item}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className={styles["talk-button-hidden"]}
        >
          <BsWhatsapp className=" mb-[0.125rem]" />
          <span>Chat with us</span>
        </motion.button>
      </Link>
    </div>
  );
}

function Menu({ onClose }) {
  return (
    <motion.div
      variants={menu}
      initial="hide"
      animate="show"
      className={styles["menu"]}
    >
      <div className={styles["menu-close-wrapper"]} onClick={onClose}>
        <IoMdClose className={styles["menu-close-icon"]} />
      </div>
      <motion.ul className={styles["menu-links-list"]} onClick={onClose}>
        <motion.li variants={menuItem}>
          <Link href="/about">
        
              <FaBuilding
                className={styles["menu-item-icon"]}
                style={{ color: "#1963ed" }}
              />
              <span>About us</span>
        
          </Link>
        </motion.li>
    
        <motion.li variants={menuItem}>
          <Link href="/#faqs">
           
              <FaQuestion
                className={styles["menu-item-icon"]}
                style={{ color: "#e71628" }}
              />
              <span>FAQs</span>
          
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/#community">
         
              <BsPeopleFill
                className={styles["menu-item-icon"]}
                style={{ color: "#8117f3" }}
              />
              <span>Community</span>
          
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

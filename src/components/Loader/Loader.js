import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import images from "../../assets/images";

const Loader = () => {
  return (
    <AnimatePresence>
      <LoaderStyles exit={{ opacity: 0 }}>
        <div>
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            src={images.smile}
            alt="Realice"
          />
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 2, duration: 2 }}
          >
            Realice
          </motion.h1>
        </div>
      </LoaderStyles>
    </AnimatePresence>
  );
};

export default Loader;
const LoaderStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: none !important;
    justify-content: center;
    flex-direction: column;

    img {
      width: 150px;
      object-fit: cover;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
    }
  }
`;

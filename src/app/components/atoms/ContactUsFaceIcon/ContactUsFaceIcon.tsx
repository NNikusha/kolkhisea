"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import faceIcon from "../../../assets/faceIcone.svg";

const ContactUsFaceIcon = () => {
  return (
    <motion.div
      className="flex justify-start items-center gap-2 pb-[24px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
    >
      <Image
        className=""
        src={faceIcon}
        width={224}
        height={80}
        alt="faceIcone"
      />
    </motion.div>
  )
}

export default ContactUsFaceIcon
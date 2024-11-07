"use client";

import { motion } from "framer-motion"
import { slideUp } from "@/utils/animation"

export default function Consult() {
  return (
    <>
      {/* 在线咨询 */}
      <div className="container overflow-hidden pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
            <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
              <motion.h1
                variants={slideUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-4xl xl:text-5xl font-bold"
              >
                在线咨询
              </motion.h1>
              <motion.p
                variants={slideUp(0.5)}
                initial="initial"
                animate="animate"
              >
                有任何需要咨询的问题可以联系我们的客服，我们将竭诚为您服务，解决您的所以疑问。
              </motion.p>
            </div>
            <div className="flex justify-center items-center">
              <motion.img
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src="world-map.png"
                alt=""
                className="w-[90%] md:w-[550px] xl:w-[500px] md:!scale-125"
              />
            </div>
          </div>
        </div>
    </>
  );
}

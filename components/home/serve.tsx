"use client";

import { motion } from "framer-motion"
import { slideUp } from "@/utils/animation"

export default function Consult() {
  return (
    <>
      {/* 服务 */}
      <div className="container overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-12 flex justify-between items-center"
          >
            <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
              独家服务
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="us.png"
                alt=""
                className="w-[300px] mx-auto md:max-w-[500px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-[300px] mx-auto space-y-4"
            >
              <img src="us.png" alt="" className="w-14" />
              <p className="uppercase font-semibold text-xl">独家刷位系统</p>
              <p className="text-gray-500 pl-6 border-l-2">
                我们能够让签证办理变得更快速，如果您有加急办理签证的需求，可以放心的选择我们，我们的团队拥有丰富的经验和专业的技术。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-[300px] mx-auto space-y-4"
            >
              <img src="us.png" alt="" className="w-14" />
              <p className="uppercase font-semibold text-xl">无隐形收费项</p>
              <p className="text-gray-500 pl-6 border-l-2">
                我们能够让签证办理变得更快速，如果您有加急办理签证的需求，可以放心的选择我们，我们的团队拥有丰富的经验和专业的技术。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="max-w-[300px] mx-auto space-y-4"
            >
              <img src="us.png" alt="" className="w-14" />
              <p className="uppercase font-semibold text-xl">服务经验丰富</p>
              <p className="text-gray-500 pl-6 border-l-2">
                我们能够让签证办理变得更快速，如果您有加急办理签证的需求，可以放心的选择我们，我们的团队拥有丰富的经验和专业的技术。
              </p>
            </motion.div>
          </div>
        </div>
    </>
  );
}

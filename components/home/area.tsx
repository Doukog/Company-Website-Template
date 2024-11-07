"use client";

import { motion } from "framer-motion"
import { slideUp } from "@/utils/animation"

export default function Consult() {
    return (
        <>
            {/* 地区 */}
            <div className="container overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                    <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
                        <motion.h1
                            variants={slideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            className="text-4xl xl:text-5xl font-semibold"
                        >
                            通过地图直观感受我们的服务范围
                        </motion.h1>
                        <div className="flex gap-3">
                            <motion.div
                                variants={slideUp(0.6)}
                                initial="initial"
                                whileInView="animate"
                                className="space-y-2"
                            >
                                <p className="font-semibold text-lg">签证国家</p>
                                <p>美国
                                    英国
                                    加拿大
                                    澳大利亚
                                    新加坡
                                    日本
                                    申根27国</p>
                            </motion.div>
                            <motion.div
                                variants={slideUp(0.8)}
                                initial="initial"
                                whileInView="animate"
                                className="space-y-2"
                            >
                                <p className="font-semibold text-lg">签证类型</p>
                                <p>学生签证
                                    探亲签证
                                    旅游签证
                                    PSW签证</p>
                            </motion.div>
                        </div>
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

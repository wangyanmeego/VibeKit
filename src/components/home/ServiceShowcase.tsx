import { motion } from "framer-motion";
import { Car, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Scene } from "@/components/3d/Scene";

export function ServiceShowcase() {
  return (
    <section className="py-20 md:py-32 relative z-10">
      {/* 背景渐变层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">核心服务</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            体验自动化未来的两大旗舰平台
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* RobotTaxi Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm hover:border-tech-blue-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-tech-blue-500/20 rounded-xl flex items-center justify-center text-tech-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full border border-tech-blue-500/30 bg-tech-blue-500/10 text-xs text-tech-blue-400 font-medium">
                  自主驾驶
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-tech-blue-400 transition-colors">RobotTaxi</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm md:text-base">
                下一代自主出行平台。体验安全、高效、舒适的无人驾驶出行，L5级自动驾驶技术。
              </p>
              
              <div className="h-56 rounded-xl mb-6 border border-white/5 relative overflow-hidden bg-black/40 group-hover:border-tech-blue-500/30 transition-colors">
                <div className="absolute inset-0">
                  <Scene color="#0066FF" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-xs text-white/40 font-mono">
                  RT-X1 PROTO
                </div>
              </div>

              <Link 
                to="/robot-taxi" 
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-tech-blue-600 hover:to-tech-blue-500 hover:text-white transition-all duration-300 font-medium text-sm"
              >
                探索平台
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Robot Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm hover:border-neon-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-neon-purple-500/20 rounded-xl flex items-center justify-center text-neon-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 text-xs text-neon-purple-400 font-medium">
                  智能交互
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-neon-purple-400 transition-colors">Robot 助手</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm md:text-base">
                智能人形机器人，适用于家庭和工业场景。先进的AI感知与自然交互能力。
              </p>

              <div className="h-56 rounded-xl mb-6 border border-white/5 relative overflow-hidden bg-black/40 group-hover:border-neon-purple-500/30 transition-colors">
                <div className="absolute inset-0">
                  <Scene color="#9933FF" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-xs text-white/40 font-mono">
                  RA-V3 CORE
                </div>
              </div>

              <Link 
                to="/robot" 
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-neon-purple-600 hover:to-neon-purple-500 hover:text-white transition-all duration-300 font-medium text-sm"
              >
                发现能力
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Brain, Zap, Shield } from "lucide-react";
import { Scene } from "@/components/3d/Scene";

export default function Robot() {
  const features = [
    {
      icon: Brain,
      title: "自然交互",
      description: "先进的自然语言处理，实现无缝人机交互体验。",
      color: "neon-purple"
    },
    {
      icon: Zap,
      title: "任务自动化",
      description: "精准处理复杂物理任务，提升工作效率。",
      color: "neon-purple"
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "多重安全机制，确保操作安全稳定。",
      color: "neon-purple"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 全局背景渐变 */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-[#1a0a2e] -z-10" />
      {/* 模糊的背景光晕 */}
      <div className="fixed inset-0 bg-gradient-to-br from-neon-purple-500/10 via-transparent to-neon-purple-500/10 pointer-events-none -z-10" />
      <div className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple-400 to-neon-purple-300">
              Robot 助手
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              智能机器人解决方案，为家庭和企业提供卓越服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm overflow-hidden h-96"
            >
              <div className="absolute inset-0">
                <Scene color="#9933FF" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-xl border border-white/10 bg-card/40 backdrop-blur-sm hover:border-neon-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-neon-purple-500/20 flex items-center justify-center text-neon-purple-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

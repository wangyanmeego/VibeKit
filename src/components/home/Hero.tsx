import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden antialiased">
      {/* 渐变背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-500/10 via-purple-500/5 to-neon-purple-500/10 pointer-events-none" />
      
      {/* 模糊的背景光晕 */}
      <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-tech-blue-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-neon-purple-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-tech-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 额外的渐变层 */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60 pointer-events-none" />

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground mb-8 backdrop-blur-md"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-tech-blue-500 animate-pulse" />
            <span>v2.0 平台已上线</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="block mb-2">构建机器人</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue-400 via-tech-blue-300 to-neon-purple-400">
              未来平台
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            开放平台，连接自主出行与智能机器人。
            <br className="hidden md:block" />
            无缝集成 <span className="text-tech-blue-400 font-medium">RobotTaxi</span> 和 <span className="text-neon-purple-400 font-medium">Robot</span> 解决方案。
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/robot-taxi">
              <Button 
                size="lg" 
                className="h-12 px-8 text-base bg-gradient-to-r from-tech-blue-600 to-tech-blue-500 hover:from-tech-blue-500 hover:to-tech-blue-400 text-white border-none shadow-lg shadow-tech-blue-500/25 hover:shadow-tech-blue-500/40 transition-all duration-300"
              >
                探索 RobotTaxi
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/robot">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 text-base border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300 backdrop-blur-sm bg-white/0"
              >
                发现机器人
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
}

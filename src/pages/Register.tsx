import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 全局背景渐变 */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-[#1a0a2e] -z-10" />
      
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        {/* 模糊的背景光晕 */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple-500/15 via-transparent to-tech-blue-500/15 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-tech-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple-400 to-tech-blue-400">
                创建账号
              </h1>
              <p className="text-muted-foreground text-sm">加入 RoboOpenPlatform 开启未来</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground/80">姓名</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-neon-purple-500/50 focus:ring-2 focus:ring-neon-purple-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground/80">邮箱</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-neon-purple-500/50 focus:ring-2 focus:ring-neon-purple-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground/80">密码</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-neon-purple-500/50 focus:ring-2 focus:ring-neon-purple-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-white/10 bg-background/50 text-neon-purple-500 focus:ring-neon-purple-500/20" />
                <label className="text-muted-foreground cursor-pointer">
                  我同意{" "}
                  <a href="#" className="text-neon-purple-400 hover:text-neon-purple-300 transition-colors">服务条款</a>
                  {" "}和{" "}
                  <a href="#" className="text-neon-purple-400 hover:text-neon-purple-300 transition-colors">隐私政策</a>
                </label>
              </div>
              
              <Button className="w-full h-11 bg-gradient-to-r from-neon-purple-600 to-neon-purple-500 hover:from-neon-purple-500 hover:to-neon-purple-400 text-white border-none shadow-lg shadow-neon-purple-500/25 hover:shadow-neon-purple-500/40 transition-all">
                注册
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-card/40 text-muted-foreground">或</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                已有账号？{" "}
                <a href="/login" className="text-neon-purple-400 hover:text-neon-purple-300 font-medium transition-colors">
                  立即登录
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

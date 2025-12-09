export function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-white/10 py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-blue-400 to-neon-purple-400">
              RoboOpen
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              通过开放标准赋能下一代自主出行与智能机器人
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm">服务</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="/robot-taxi" className="hover:text-tech-blue-400 transition-colors">
                  RobotTaxi
                </a>
              </li>
              <li>
                <a href="/robot" className="hover:text-neon-purple-400 transition-colors">
                  Robot 助手
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  企业解决方案
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm">资源</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  文档
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API 参考
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  开发者门户
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  社区
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm">法律</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  安全
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© 2024 RoboOpenPlatform. 保留所有权利。</div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <div className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center" />
            <div className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center" />
            <div className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}

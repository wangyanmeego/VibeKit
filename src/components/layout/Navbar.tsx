import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "relative flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300",
          scrolled ? "bg-background/70 backdrop-blur-xl border border-white/10 shadow-lg" : "bg-transparent"
        )}>
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-tech-blue-500 to-neon-purple-500 flex items-center justify-center overflow-hidden">
              <Bot className="text-white w-5 h-5 relative z-10" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              Robo<span className="text-tech-blue-400">Open</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link 
              to="/robot-taxi" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              RobotTaxi
            </Link>
            <Link 
              to="/robot" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Robot
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">登录</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-tech-blue-600 to-tech-blue-500 hover:from-tech-blue-500 hover:to-tech-blue-400 text-white border-none shadow-md shadow-tech-blue-500/20">
                开始使用
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full p-4 md:hidden">
          <div className="bg-card/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex flex-col space-y-2 shadow-2xl">
            <Link 
              to="/robot-taxi" 
              className="p-3 text-sm font-medium hover:bg-white/5 rounded-lg transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              RobotTaxi
            </Link>
            <Link 
              to="/robot" 
              className="p-3 text-sm font-medium hover:bg-white/5 rounded-lg transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Robot
            </Link>
            <div className="h-px bg-white/10 my-2" />
            <div className="flex flex-col gap-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-center">登录</Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-tech-blue-600 to-tech-blue-500 hover:from-tech-blue-500 hover:to-tech-blue-400 text-white border-none justify-center">
                  开始使用
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

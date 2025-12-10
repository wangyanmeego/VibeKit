import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'

// 页面组件
import Home from '@/pages/Home'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import Dashboard from '@/pages/Dashboard'
import Apps from '@/pages/dashboard/Apps'
import NewApp from '@/pages/dashboard/NewApp'
import AppDetail from '@/pages/dashboard/AppDetail'
import Apis from '@/pages/dashboard/Apis'
import ApiDetail from '@/pages/dashboard/ApiDetail'
import Analytics from '@/pages/dashboard/Analytics'
import Billing from '@/pages/dashboard/Billing'
import Profile from '@/pages/profile/Profile'
import Settings from '@/pages/profile/Settings'
import Team from '@/pages/profile/Team'
import Help from '@/pages/Help'
import Docs from '@/pages/Docs'

// 布局组件
import Layout from '@/components/Layout'
import AuthLayout from '@/components/AuthLayout'

// 路由守卫组件
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }
  
  if (!user) {
    return <Navigate to="/auth/login" replace />
  }
  
  return <>{children}</>
}

// 公开路由守卫
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }
  
  if (user) {
    return <Navigate to="/dashboard" replace />
  }
  
  return <>{children}</>
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* 公开页面 */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="help" element={<Help />} />
            <Route path="docs" element={<Docs />} />
          </Route>

          {/* 认证页面 */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route path="forgot-password" element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            } />
          </Route>

          {/* 受保护页面 */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="apps" element={<Apps />} />
            <Route path="apps/new" element={<NewApp />} />
            <Route path="apps/:id" element={<AppDetail />} />
            <Route path="apis" element={<Apis />} />
            <Route path="apis/:id" element={<ApiDetail />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="billing" element={<Billing />} />
          </Route>

          {/* 个人中心 */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="team" element={<Team />} />
          </Route>

          {/* 404页面 */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-muted-foreground mb-4">页面不存在</p>
              <a href="/" className="text-primary hover:underline">
                返回首页
              </a>
            </div>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
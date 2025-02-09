import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './app/dashboard/page'
import LoginPage from './app/login/page'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider } from './components/ui/sidebar'
import { useEffect, useState } from 'react'

function SettingsPage() {
  return (
    <div>
      <h1>Settings Page</h1>
      <p>Here are your settings.</p>
    </div>
  )
}

function App(): JSX.Element {
  const [shouldHideSidebar, setShouldHideSidebar] = useState(false)
  useEffect(() => {
    if (window.location.pathname === '/login') {
      setShouldHideSidebar(true)
    }
  }, [])
  return (
    <BrowserRouter>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar
          hidden={shouldHideSidebar}
          className={shouldHideSidebar ? 'hidden md:hidden' : ''}
          collapsible={`icon`}
        />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App

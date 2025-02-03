import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

function App(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {/* {children} */}
        <div>
          Hello world
        </div>
      </main>
    </SidebarProvider>
  )
}

export default App

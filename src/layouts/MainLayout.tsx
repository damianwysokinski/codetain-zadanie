import { Outlet } from 'react-router'
import AppFooter from '../components/layout/app-footer/AppFooter'
import AppHeader from '../components/layout/app-header/AppHeader'

const Layout: React.FC = () => {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    );
}

export default Layout;
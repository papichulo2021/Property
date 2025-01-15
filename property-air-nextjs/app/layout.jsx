import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';
import 'photoswipe/dist/photoswipe.css';


export const metadata = {
    title: 'Property Air',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property'
}

const MainLayout = ({children}) => {
    return (
        <AuthProvider>
        <html>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <ToastContainer />
            </body>
        </html>
        </AuthProvider>
    );
}
 
export default MainLayout ;
import { QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
// import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import { queryClient } from "@/services/QueryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedContext from "@/context/SharedContext";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diner-Pro",
  description: "Generated by create next app",
  icons: '/images/brand_logo/logo1.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"w-screen"}>
        <main className="w-full">
          <QueryClientProvider client={queryClient}>
              <ReduxProvider>
                <SharedContext>
                  {children}
                </SharedContext>
              </ReduxProvider>
              {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-right" />}
              <ToastContainer hideProgressBar={true}/>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}

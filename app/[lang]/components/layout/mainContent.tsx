import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
export const MainContent = ({ children }: any) => {
    return (
        <main className="fadeIn w-full text-black dark:text-white relative dark:bg-black bg-white min-h-screen transition flex border-t-[1vw] dark:border-white/20 border-black">
            <Header/>
            <div className="w-full overflow-hidden">
            {children}
            </div>
            <Sidebar/>
        </main>
    );
};
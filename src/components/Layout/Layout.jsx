import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-[#F9FAFB]">{children}</main>
      <Footer />
    </div>
  );
}

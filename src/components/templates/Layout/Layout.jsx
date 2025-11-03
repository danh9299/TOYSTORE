import Header from "@organisms/Header/Header";
import Footer from "@organisms/Footer/Footer";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-[#F9FAFB]">{children}</main>
      <Footer />
    </div>
  );
}

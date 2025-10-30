import products from "@data/products.json";
import ProductSlide from "@components/ProductSlide/ProductSlide";
import Benefit from "@components/Benefit/Benefit";
import Banner from "@molecules/Banner/Banner";
import Contact from "@components/Contact/Contact";
import MailForm from "@components/MailForm/MailForm";
import BannerImg1 from "@assets/banners/banner1.png";
import BannerImg2 from "@assets/banners/banner2.jpg";
import BannerImg3 from "@assets/banners/banner3.jpg";


export default function Home() {
  const bannerImages = [BannerImg1, BannerImg2, BannerImg3];

  return (
    <div className="max-w-[1024px] mx-auto p-4 bg-[#F9FAFB]">
      <Banner images={bannerImages} />
      <Benefit className="my-5" />
      <ProductSlide title="Đồ chơi bé trai" products={products.boys} />
      <ProductSlide title="Đồ chơi bé gái" products={products.girls} />
      <div className="flex flex-row gap-2">
        <Contact />
        <MailForm />
      </div>
    </div>
  );
}

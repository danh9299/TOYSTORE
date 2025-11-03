import BenefitBox from "@molecules/BenefitBox/BenefitBox";
import MoneyIcon from "@assets/icons/money.svg";
import VoucherIcon from "@assets/icons/voucher.svg";
import DeliveryIcon from "@assets/icons/delivery.svg";
import ReturnIcon from "@assets/icons/return.svg";
import ContactIcon from "@assets/icons/contact.svg";


export default function Benefit({ className = "" }) {
  return (
    <div className={`flex justify-between gap-1 ${className}`}>
      <BenefitBox svgIcon={MoneyIcon} text="Giá rẻ bất ngờ" />
      <BenefitBox svgIcon={VoucherIcon} text="Ưu đãi bất tận" />
      <BenefitBox svgIcon={DeliveryIcon} text="Giao hàng nhanh chóng" />
      <BenefitBox svgIcon={ReturnIcon} text="Đổi trả dễ dàng" />
      <BenefitBox svgIcon={ContactIcon} text="Tư vấn nhiệt tình" />
    </div>
  );
}
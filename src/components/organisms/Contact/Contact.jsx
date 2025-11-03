import contacts from "@data/contacts.json";
import ContactInfo from "@molecules/ContactInfo/ContactInfo";

export default function Contact() {
  return (
    <div className="bg-white rounded-lg shadow w-1/2 p-4">
      <h2 className="font-bold text-lg mb-2">Liên hệ</h2>
      <div className="flex flex-col gap-2">
        {contacts.map((contact) => {
          const iconUrl = new URL(
            `/src/assets/icons/${contact.icon}`,
            import.meta.url
          ).href;

          return (
            <ContactInfo
              network={contact.network}
              url={contact.url}
              icon={iconUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

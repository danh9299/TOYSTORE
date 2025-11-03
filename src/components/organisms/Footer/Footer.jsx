import contacts from "@data/contacts.json";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="max-w-[1024px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">ToyStore</h3>
          <p>22/148 ngõ Thịnh Hào 1, Ô Chợ Dừa, Hà Nội</p>
          <p>📞 0336 775 479</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Mạng Xã Hội</h3>
          <div className="space-x-2">
            {contacts.map((contact) => (
              <a className="flex flex-col hover:underline hover:opacity-[0.8]" href={`https://${contact.url}`} target="_blank">{contact.network}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400 text-center">
            © 2025 ToyStore. All rights reserved.
            <br />
            Developed by Duy Anh Nguyen.
          </p>
        </div>
      </div>
    </footer>
  );
}

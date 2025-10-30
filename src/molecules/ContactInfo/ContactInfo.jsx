export default function ContactInfo({ icon, network, url }) {
  return (
    <a
      className="flex flex-row items-center gap-2"
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="max-w-[30px] h-auto w-full" src={icon} alt={network} />
      <p className="text-large underline hover:opacity-[0.8]">{network}</p>
    </a>
  );
}

export default function ListItem({ children = "", className = "" }) {
  return <li className={className}>{children}</li>;
}

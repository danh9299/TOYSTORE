import ListItem from "@atoms/ListItem";

export default function List({ items = [], className = "", listItemClassName = "" }) {
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <ListItem key={i} listItemClassName="">
          {item}
        </ListItem>
      ))}
    </ul>
  );
}
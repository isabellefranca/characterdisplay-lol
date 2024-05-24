export default function Personagem({ id, name, image, description, onSelect }) {
  return (
    <li
      className="personagem p-2 border-2 rounded cursor-pointer transition-all"
      id={id}
      data-name={name}
      data-description={description}
      onMouseEnter={() => onSelect(id)}
    >
        <img className="w-full rounded" src={image} alt={`Personagem ${name}`} />
    </li>
  );
}

import { useAppSelector } from "../../hooks/redux";

export const FavoritePage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  console.log(favorites);

  if (favorites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul>
        {favorites.map((f) => (
          <li>
            <a href={f} target="_blank">{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

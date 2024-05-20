export const ItemDisplayCard = ({ item, type, name }) => {
    const size = type === "hero" ? "w-full h-48" : "w-48 h-auto"
    return (
        <div className="text-center border-2 border-black">
            <img
                className={`${size} object-cover`}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={name}
            />
            <h2 className="my-3">{name}</h2>
        </div>
    )
   
};
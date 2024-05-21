import PropTypes from 'prop-types';

export const ItemDisplayCard = ({ item, type, name }) => {
    const size = type === 'hero' ? 'w-full h-48 aspect-square' : 'w-48 h-auto'
    return (
        <div className="min-h-80 text-center border-2 border-black transition-all flex flex-col justify-between">
            <img
                className={`${size} object-cover`}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={name}
            />
            <h2 className="my-3">{name}</h2>
        </div>
    )
}

ItemDisplayCard.propTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

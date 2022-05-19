import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {id, title, imageURL} = category;
    return (
        <div key={id} className="category-container">
            <div className="category-body-container">
                <h1>{title}</h1>
                <p>Shop Now</p>
            </div>
            <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
        </div>
    )
}

export default CategoryItem;
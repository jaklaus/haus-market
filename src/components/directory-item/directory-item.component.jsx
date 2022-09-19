import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {
    const {id, title, imageURL} = category;
    return (
        <div key={id} className="directory-item-container">
            <div className="directory-body-container">
                <h1>{title}</h1>
                <p>Shop Now</p>
            </div>
            <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
        </div>
    )
}

export default DirectoryItem;
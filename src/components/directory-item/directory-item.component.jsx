import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {id, title, imageURL, route} = category;
    const navigate = useNavigate();
    const onNavigationHandler = () => navigate(route);

    return (
        <div key={id} className="directory-item-container" onClick={onNavigationHandler}>
            <div className="directory-body-container">
                <h1>{title}</h1>
                <p>Shop Now</p>
            </div>
            <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
        </div>
    )
}

export default DirectoryItem;
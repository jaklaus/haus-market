import { StyledDirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';
const categories = [
    {
        id: 1,
        title: "Hats",
        imageURL: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340',
        route: 'shop/hats'
    },
    {
        id: 2, 
        title: "Sneakers", 
        imageURL: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412',
        route: 'shop/sneakers'
    },
    {
        id: 3, 
        title: "Jackets", 
        imageURL: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
        route: 'shop/jackets'
    },
    {
        id: 4, 
        title: "Men's", 
        imageURL: 'https://images.unsplash.com/photo-1563183927-071ac1d9aef6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272',
        route: 'shop/mens'
    },
    {
        id: 5, 
        title: "Women's", 
        imageURL: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
        route: 'shop/womens'
    },
];

const Directory = () => {
    return (
        <StyledDirectoryContainer>
            {categories.map((category) => {
                return (
                    <DirectoryItem key={category.id} category={category} />
                )
            })}
        </StyledDirectoryContainer>
    )
}

export default Directory;
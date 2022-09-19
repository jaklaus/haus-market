import { StyledDirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({categories}) => {
    
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
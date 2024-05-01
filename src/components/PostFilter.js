import * as React from 'react' ;
import {Filter, SearchInput, TextInput} from 'react-admin'


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="search" source ="title" alwaysOn />
        <SearchInput source="title" alwaysOn />
        
        
        
    </Filter>

);




export default PostFilter;

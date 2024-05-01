import React from 'react'
import {List, DatagridConfigurable, TextField, DateField, EditButton, DeleteButton, TopToolbar, SelectColumnsButton, CreateButton, ExportButton} from 'react-admin'
import PostFilter from './PostFilter';

//import {Search, SearchResultsPanel, SearchResultItem} from "@react-admin/ra-search"
//import { SearchInput } from 'react-admin';

const PostListActions = () => (
    <TopToolbar>
       
        <SelectColumnsButton />
        
        <CreateButton />
        <ExportButton/>
        
        
    </TopToolbar>

);





/**const PostList = (props) => {*/
 const PostList = () => (

    /*return(<List {...props}>*/
    <List actions={<PostListActions />} filters={<PostFilter />}>
   
        <DatagridConfigurable omit={['id', 'publishedAt']}>
            <TextField source='id' />
          
            
            <TextField source ='title' />
            <DateField source = 'publishedAt' />
            <EditButton basePath='/posts' />
            <DeleteButton basePath='/posts' />
        </DatagridConfigurable>

    </List>
        
    );
//}



export default PostList
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Admin, Resource  /*Layout*/} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

//import MyAppbar from './components/AppBar'

 //const MyLayout = (props) => <Layout {...props} AppBar={MyAppbar} />
function App() {
  return (
   
    <Admin dataProvider={restProvider('http://localhost:3000')}  /*AppBar ={MyLayout}*/>
      <Resource name='posts'
       list={PostList} 
       create ={PostCreate} 
       edit ={PostEdit} 
       />
       <Resource name='users'
       list={UserList} 
       create ={UserCreate} 
       edit ={UserEdit} 
       />
    </ Admin>
   

  

  )

}

export default App;

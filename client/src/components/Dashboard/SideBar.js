import React from 'react'
// import './sidebar.css'

import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import PostAddIcon from '@material-ui/icons/PostAdd'
// import AddIcon from '@material-ui/icons/Add'
// import ImportExportIcon from '@material-ui/icons/ImportExport'
// import ListAltIcon from '@material-ui/icons/ListAlt'
// import DashboardIcon from '@material-ui/icons/Dashboard'
// import PeopleIcon from '@material-ui/icons/People'
// import RateReviewIcon from '@material-ui/icons/RateReview'
// import { TreeView } from '@material-ui/lab'
// import { TreeItem } from '@material-ui/lab'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/'>{/* <img src={logo} alt='Ecommerce' /> */}</Link>
      <Link to='/admin/dashboard'>
        <p>
          <Dashboard /> Dashboard
        </p>
      </Link>
      <Link to='/adminproduct'>
        {/* <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        > 
          {/* <TreeItem nodeId='1' label='Products'> */}
        {/* <Link to='/admin/products'>
              <TreeItem nodeId='2' label='All' icon={<PostAddIcon />} />
            </Link> 

            // {/* <Link to='/admin/product'>
            //   <TreeItem nodeId='3' label='Create'
            //    // icon={<AddIcon />}
            //     />
            // </Link> */}
        {/* </TreeItem>
        </TreeView>
      </Link> */}
      </Link>

      <Link to='/adminorder'>
        <p>
          {/* <ListAltIcon /> */}
          Orders
        </p>
      </Link>
      <Link to='/adminusers'>
        <p>
          {/* <PeopleIcon />  */}
          Users
        </p>
      </Link>
      <Link to='/adminreviews'>
        <p>
          {/* <RateReviewIcon /> */}
          Reviews
        </p>
      </Link>
    </div>
  )
}

export default Sidebar

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import { CImage } from '@coreui/react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
// import memberNav from '../Navigations/member'

// sidebar nav config
import navigation from '../_membernav'
import navigation2 from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const user="admin"

  return (
    <CSidebar className="bg-primary"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      color="white"
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
      
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
        {/* <img height={35} src={Logo} alt="slide 1" /> */}
        <h4>UCSC_WorkZone</h4>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
       {/* {user=true &&  <AppSidebarNav items={navigation} />

       } */}
       <AppSidebarNav  items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

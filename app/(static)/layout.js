import React from 'react'
import { Plus, AlignRight, Airplay, SendHorizontal, LayoutPanelTop, FileOutput, ChevronRight, ChevronLeft, Settings, User, PackageCheck, Package, Users2, Binary, CircuitBoard, Component, Layers, Move3D, Network, Nfc, Tornado } from "lucide-react";



const layout = ({ children }) => {
  return (
    <div>
      <header className='navbar sticky-top flex-md-nowrap p-0 shadow' style={{backgroundColor:'#7039aa'}}>
        <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white' href="#">Tourista</a>
        <div className='d-flex d-none d-md-block px-5 dropdown'>
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/shadcn.png" className='rounded-circle' style={{height: 30, width: 30}} alt="" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
            <li>
              <a className="dropdown-item fw-medium" href="#" style={{fontSize: 12}}>
                <User size={14} className='mb-1'/>
                <span className='p-2'>My Profile</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item fw-medium" href="#" style={{fontSize: 12}}>
                <Settings size={14} className='mb-1'/>
                <span className='p-2'>Settings</span>
              </a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item fw-medium" href="#" style={{fontSize: 12}}>
                <FileOutput size={14} className='mb-1'/>
                <span className='p-2'>Sign In</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><AlignRight size={18}/>
            </button>
          </li>
        </ul>
      </header>
      <div className='container-fluid'>
        <div className='row'>
          {/* SIDEBAR */}
          <div className='sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary h-100'>
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Tourista</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                      <Airplay size={18}/>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Tornado size={18}/>  
                      Quick Visa
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <PackageCheck size={18}/>  
                      Track Visa
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <CircuitBoard size={18}/>  
                      History
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4 '>
          {children}
          </main>
        </div>
      </div>
      
    </div>
  )
}

export default layout
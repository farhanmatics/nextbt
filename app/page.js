import Image from 'next/image'
import styles from './page.module.css'
import { Plus, AlignJustify, Airplay, SendHorizontal, LayoutPanelTop, FileOutput, ChevronRight, ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div>
      <header className='navbar sticky-top flex-md-nowrap p-0 shadow' style={{backgroundColor:'#7039aa'}}>
        <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white' href="#">Tourista</a>
        <div className='d-flex d-none d-md-block px-5 dropdown'>

              <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/shadcn.png" className='rounded-circle' style={{height: 30, width: 30}} alt="" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item fw-medium" href="#" style={{fontSize: 12}}><FileOutput size={14} className='mb-1'/><span className='p-2'>My Profile</span></a></li>
                <li><a className="dropdown-item fw-medium" href="#" style={{fontSize: 12}}><FileOutput size={14} className='mb-1'/><span className='p-2'>Settings</span></a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item fw-medium" href="#" style={{fontSize: 12}}><FileOutput size={14} className='mb-1'/><span className='p-2'>Logout</span></a></li>
              </ul>
            
          
        </div>
        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><AlignJustify size={18}/>
            </button>
          </li>
        </ul>
      </header>

      <div className='container-fluid'>
        <div className='row'>
          {/* SIDEBAR */}
          <div className='sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary'>
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
                    {/* COLLAPSE */}
                    <a className="nav-link d-inline-flex align-items-center gap-2 collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                      <SendHorizontal size={18}/>
                      Orders
                    </a>
                    <div className="collapse" id="home-collapse">
                      <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                          <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            <ChevronRight size={16} strokeWidth={3}/>
                            Overview
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            <ChevronRight size={16} strokeWidth={3}/>
                            Updates
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            <ChevronRight size={16} strokeWidth={3} />
                            Reports
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* COLLAPSE */}
                    <a className="nav-link d-inline-flex align-items-center gap-2" href="#" data-bs-toggle="collapse" data-bs-target="#prod-collapse" aria-expanded="false">
                      <Airplay size={18}/>
                      Products
                    </a>
                    <div className="collapse" id="prod-collapse">
                      <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                          <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            <ChevronRight size={16} strokeWidth={3}/>
                            Overview
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            <ChevronRight size={16} strokeWidth={3}/>
                            Updates
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                            <ChevronRight size={16} strokeWidth={3} />
                            Reports
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>  
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>
                      Integrations
                    </a>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Saved reports</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    {/* plus icon */}
                    <Plus size={16} color='#000'/>
                  </a>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <Airplay size={18}/>
                      Year-end sale
                    </a>
                  </li>
                </ul>

                <hr className="my-3" />

                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <LayoutPanelTop size={18} />
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <FileOutput size={18} />
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PAGEBODY */}
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            {/* HEADER */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
              </div>
            </div>

            {/* BLANKBODY */}
            <h3>Section title</h3>
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
      
    </div>
  )
}

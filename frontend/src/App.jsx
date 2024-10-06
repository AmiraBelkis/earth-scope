import Map from './pages/map/Map'
import { Menu } from './components/menu/Menu'
import { SideBar } from './components/side_bar/SideBar'
import { menuItems } from './utils/constants'
import { Row, Col } from 'react-bootstrap/'
import { useState } from 'react'
import { addDays } from 'date-fns';
import { MapContext } from './contexts/context'
import { Route, Routes } from "react-router-dom"
import { About } from './pages/about/About'
import { PageNotFound } from './pages/PageNotFound'
import { loadAppIcons } from './hooks/loadIcons'

function App() {
  loadAppIcons();
  const [mapFilter, setMapFilter] = useState({
    "regionId": "all",
    "categoriesList": [],
    "sourcesList": [],
    "startDate": addDays(new Date(), -7),
    "endDate": new Date(),
    "status": "all"

  });
  return (
    <>
      <MapContext.Provider value={[mapFilter, setMapFilter]}>
        <Row>
          <SideBar></SideBar>
          <Col md={9} className='p-0' >
            <Menu items={menuItems}></Menu>
            <Routes>
              <Route path="/" element={<Map />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Col>
        </Row>
      </MapContext.Provider>

    </>
  )
}

export default App

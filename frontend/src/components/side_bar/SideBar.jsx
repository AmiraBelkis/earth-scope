import { Col } from "react-bootstrap"
import { Filter } from "./filter/Filter"
import { Logo } from "../Logo"
import { Route, Routes } from "react-router-dom"
import { SideMenu } from "./about_sections/SideMenu"

export const SideBar = () => {
    return <Col md={3} className='p-0 bg-white side-bar'>
        <Logo></Logo>
        <Routes>
            <Route path="/" element={<Filter />} />
            <Route path="/about" element={<SideMenu />} />
        </Routes>
    </Col>

}
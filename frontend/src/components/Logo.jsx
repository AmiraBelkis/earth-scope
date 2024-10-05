import logo_inline from "/logo-inline.png"

export const Logo = () => {
    return <>
        <div className="logo-container">
            <a href="/">
                <img src={logo_inline} alt="logo" width="80%" />
            </a>
        </div>
        <hr className="separator" />
    </>
}


export const LogoMobileView = () => {
    return <>
        <div className="mobile-view-logo ms-3">
            <img src={logo_inline} alt="logo" width="80%" />
        </div>
    </>
}

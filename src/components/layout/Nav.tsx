import React, { FC, useEffect, useRef, useState } from "react"
import classes from "classnames"
import { useBrand } from "../../hooks/useBrand"

// I don't remember why this is called MQL
// const MQL = 992;
export const Nav: FC = () => {
    const mainNavRef = useRef<HTMLElement>(null)
    const [ previousTop, setPreviousTop ] = useState(0)
    const [ isVisible, setIsVisible ] = useState(true)
    const [ isFixed, setIsFixed ] = useState(true)
    
    const [ isActive, setIsActive ] = useState(false)
    const badgeUrl = useBrand()

    const toggleDrop = () =>{       
        setIsActive(!isActive)
    }
    const handleClassAdjustments = () => {
        if (!mainNavRef.current) {
            return
        }

        const {
            clientHeight,
            style: {
                paddingTop,
                paddingBottom
            }
        } = mainNavRef.current
        // Account for padding
        const headerHeight = clientHeight
            + (paddingTop ? Number.parseInt(paddingTop) : 0)
            + (paddingBottom ? Number.parseInt(paddingBottom) : 0)

        const currentTop = window.scrollY

        // check if user is scrolling up
        if (currentTop < previousTop) {
            // if scrolling up...
            if (currentTop > 0 && isFixed) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
                setIsFixed(false)
            }
        } else if (currentTop > previousTop) {
            // if scrolling down...
            setIsVisible(false)
            if (currentTop > headerHeight && !isFixed) {
                setIsFixed(true)
            }
        }
        setPreviousTop(currentTop)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleClassAdjustments)
        return () => {
            window.removeEventListener("scroll", handleClassAdjustments)
        }
    })

    const classNames = classes(
        "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top",
        {
            "is-visible": isVisible,
            "is-fixed":   isFixed
        }
    )
    const className2 = classes(
        "navbar-collapse",
        {   
            "collapse": !isActive,
            "show":     isActive
        }
    )

    return (
        <nav className={classNames} id="mainNav" ref={mainNavRef}>
            <a href="/" className="navbar-brand text-uppercase">
                <img src={badgeUrl} alt="Open Sourcery Logo" width={40} height={40} />
                <span className="navbar-brand-text">Open Sourcery</span>
            </a>
            <button className={`navbar-toggler ${isActive ? "" : "collapsed"}`} type="button" onClick={()=>{toggleDrop()}} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className={className2} id="navbarNav" style={{}}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span className="fab" /> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">
                            <span className="fab" /> Projects 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/OpenSourceryClub">
                            <span className="fab fa-github" /> 
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

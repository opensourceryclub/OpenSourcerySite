import React, { useEffect, useRef, useState, FC } from "react"
import classes from "classnames"

// I don't remember why this is called MQL
// const MQL = 992;
export const Nav: FC = () => {
    const mainNavRef = useRef<HTMLElement>(null)
    const [previousTop, setPreviousTop] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [isFixed, setIsFixed] = useState(true)

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

    return (
        <nav className={classNames} id="mainNav" ref={mainNavRef}>
            <a href="/" className="navbar-brand text-uppercase">
                <img src="assets/images/Badge.png" alt="Open Sourcery Logo" width={40} height={40} />
                <span className="navbar-brand-text">Open Sourcery</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbarNav" style={{}}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/OpenSourceryClub">
                            <span className="fab fa-github" /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

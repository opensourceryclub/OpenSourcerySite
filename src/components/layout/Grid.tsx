/**
 * @file Utility components for using Bootstrap's grid system.
 * @author Open Soucery
 *
 * @see {@link https://getbootstrap.com/docs/4.0/layout/grid/ Grid System Docs}
 */
import React, { PropsWithChildren } from "react"
import classNames from "classnames"

/**
 * Bootstrap's Screen width breakpoints.
 *
 * @see {@link https://getbootstrap.com/docs/4.0/layout/grid/#grid-options Grid Options Docs}
 */
export type Breakpoint =
    | "xsm"
    | "sm"
    | "md"
    | "lg"
    | "xlg"

export type SectionProps = PropsWithChildren<{
    id?: string

    /**
     * An optional title to put at the top of the section.
     */
    title?: string

    /**
     * Optional additional classnames to add.
     */
    classes?: string[]
}>

export type ColumnProps = PropsWithChildren<{
    id?: string

    /**
     * Optional additional classnames to add.
     */
    classes?: string[]

    /**
     * Sets the column width at a certain breakpoint.
     *
     * When not provided, the column's * width is automatically determined by
     * flexbox. If `width` is a number, it is used as the width for the extra
     * small breakpoint (and therefore everything). Otherwise, `width` is a record
     * where each key is a breakpoint and each value is the width of the column
     * at that breakpoint.
     */
    width?: number | Partial<Record<Breakpoint, number>>
}>

/**
 * Creates a page section.
 *
 * @see SectionProps
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(({
    id,
    title,
    classes = [],
    children
}, ref) => (
    id = id ?? (
        title
            ? `section-${title.replace(" ", "-").toLowerCase()}`
            : undefined
    ),

    <section
        id={id?.toLowerCase()}
        className={classNames("page-section", ...classes)}
        ref={ref}
    >
        <div className="container text-center">
            {title && <h1 className="title display-4">{title}</h1>}
            {children}
        </div>
    </section>
))

/**
 * Creates a row within a page section. This should not be used as a general
 * row component, because it has certain unmodifyable CSS classes that may be
 * undesireable.
 *
 * @see Section
 * @see SectionProps
 */
export const SectionRow = React.forwardRef<HTMLDivElement, SectionProps>(({
    id,
    title,
    classes = [],
    children
}, ref) => (
    id = id ?? (
        title
            ? `section-row-${title.replace(" ", "-").toLowerCase()}`
            : undefined
    ),

    <div
        id={id}
        className={classNames("row mb-4 justify-content-center", ...classes)}
        ref={ref}
    >
        {title && <h3 className="subtitle text-center">{title}</h3>}
        {children}
    </div>
))

/**
 * Creates a column, for use inside of a row. The row may be a `SectionRow` or
 * otherwise.
 *
 * @see ColumnProps
 * @see SectionRow
 */
export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(({
    id,
    classes = [],
    width,
    children
}, ref) => {
    let colClass: string[]

    if (!width) {
        colClass = [ "col" ]
    } else if (typeof width === "number") {
        if (width <= 0 || width > 12) {
            throw new Error("Column width must be between 0-12 inclusive.")
        }
        colClass = [ `col-${width}` ]
    } else {
        colClass = Object.keys(width).map(
            bp => bp === "xsm"
                // extra small breakpoint has no prefix
                ? `col-${width[bp as Breakpoint]}`
                : `col-${bp}-${width[bp as Breakpoint]}`
        )
    }

    return (
        <div
            id={id}
            className={classNames(...colClass, classes)}
            ref={ref}
        >
            {children}
        </div>
    )
})

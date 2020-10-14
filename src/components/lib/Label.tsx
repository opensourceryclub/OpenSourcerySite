import React, { FC } from "react"
import classNames from "classnames"

export interface IconProps {

    /**
     * The FontAwesome fill style. Most fill styles, except for `solid`,
     * aren't available for most icons because they're only available with
     * a pro subscription.
     *
     * @see https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
     */
    fillStyle?: "solid" | "regular" | "light" | "duotone" | "brand"
    icon: string
    fa?: boolean
}

export interface IconLabelProps extends IconProps {

    /**
     * The text to display next to the icon. If not provided, the component's
     * `children` are used instead.
     */
    text?: string
    id?: string
}

/**
 * Creates a label that displays some text with an icon to its left
 * @param props
 */
export const IconLabel: FC<IconLabelProps> = ({
    text,
    id,
    children,
    ...iconProps
}) => (
    <span id={id}>
        <Icon {...iconProps} />
        {
            text
                ? <>&nbsp;{text.trim()}</>
                : children
        }
    </span>
)

/**
 * Creates a FontAwesome icon
 * @param props
 */
export const Icon: FC<IconProps> = ({ fillStyle = "", icon = "", fa = true }) => {
    if(!fa)
        return <span className={icon}></span>
        
    // By default use font awesome.
    return <span className={classNames([ "fa" + fillStyle.charAt(0), icon.startsWith("fa-") ? icon : "fa-" + icon ])} />
}

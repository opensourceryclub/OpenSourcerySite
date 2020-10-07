import React, { MouseEventHandler, PropsWithChildren } from "react"
import { omit, pick } from "ramda"
import { IconLabel, IconLabelProps } from "./Label"
import "./_button.scss"

export interface ButtonProps {
    url?: string;
    /**
     * Class names that define the icon to put next to the text. If none are provided,
     * no icon appears.
     */
    // icon?: Parameters<typeof classNames> | string;
    onClick?: MouseEventHandler;
}
export type LabeledButtonProps = PropsWithChildren<ButtonProps & IconLabelProps>;

export const Button = React.forwardRef<HTMLAnchorElement, PropsWithChildren<ButtonProps>>(({
    url,
    onClick,
    children
}, ref) =>
    <a
        {...{
            href:      url,
            className: "btn btn-primary",
            target:    "_blank",
            rel:       "noopener noreferrer",
            onClick,
            ref
        }}
    >
        {children}
        {/* {icon && <span className={classNames(icon)} />}
        {" " + text?.trim()} */}
    </a>
)

/**
 * Convienence component - Creates a button with a labeled icon inside of it
 *
 * @see Button
 * @see IconLabel
 */
export const LabeledButton = React.forwardRef<HTMLAnchorElement, LabeledButtonProps>(
    (props, ref) =>
        <Button ref={ref} {...pick([ "url", "onClick" ], props)}>
            <IconLabel {...omit([ "url", "onClick" ], props)} >
                {props.children}
            </IconLabel>
        </Button >
)

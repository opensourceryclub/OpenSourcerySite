import React from "react";
import classNames from "classnames";

export interface ButtonProps {
    url: string;
    /**
     * Class names that define the icon to put next to the text. If none are provided,
     * no icon appears.
     */
    icon?: string;
    text: string;
}

export const Button = ({
    url,
    icon,
    text
}: ButtonProps) => (
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            {icon && <span className={classNames(icon)} />}
            {text}
        </a>
    )

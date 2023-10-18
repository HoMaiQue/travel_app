import Image from "next/image";
import React from "react";

interface Props {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
}

const Button: React.FC<Props> = ({ type, title, icon, variant }) => {
    return (
        <button
            type={type}
            className={`flexCenter gap-3 rounded-full border ${variant}`}
        >
            {icon && <Image src={icon} alt={title} height={24} width={24} />}
            <label htmlFor="" className="whitespace-nowrap font-bold">
                {title}
            </label>
        </button>
    );
};

export default Button;

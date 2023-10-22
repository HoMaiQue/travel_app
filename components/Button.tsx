import Image from "next/image";
import React from "react";

interface Props {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button: React.FC<Props> = ({ type, title, icon, variant, full }) => {
    return (
        <button
            type={type}
            className={`flexCenter gap-3 rounded-full border ${variant} ${
                full && "w-full"
            }`}
        >
            {icon && <Image src={icon} alt={title} height={24} width={24} />}
            <label htmlFor="" className="whitespace-nowrap font-bold cursor-pointer">
                {title}
            </label>
        </button>
    );
};

export default Button;

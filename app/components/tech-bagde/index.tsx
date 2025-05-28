"use client";


type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({name} : TechBadgeProps) => {
    return (
        <span className="text-neutral-900 bg-[#179f91]/80 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
};
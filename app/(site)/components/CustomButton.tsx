import { FiArrowDownRight } from "react-icons/fi";

interface buttonProps {
    title: string,
    handleOnClick?: () => void,
    hasShadow?: boolean,
    hasArrow?: boolean,
}
export default function CustomButton({title, handleOnClick, hasShadow, hasArrow}:buttonProps) {
    return (
        <div className="relative z-10">
            <button 
                onClick={handleOnClick}
                className="text-white font-semibold py-3 px-4 border-2 border-secondary bg-primary rounded-[4px] text-sm"
            >
                <p className="flex gap-2 items-center">
                    {title}
                    {hasArrow && (
                        <FiArrowDownRight className="w-4 h-5" />
                    )}
                </p>
            </button>
            { hasShadow && (
                    <div className="w-full h-full bg-primary absolute right-2 rounded-[4px] -top-2 -z-[1]" />
            )}
        </div>
        
    )
}

interface ButtonProps {
    children: any;
    onClick: () => void;
    solidButton?: boolean;
}

export const Button = ({children, onClick, solidButton}:ButtonProps) => {
    return <button 
    className={`font-bold ${solidButton ? `bg-black dark:bg-white dark:text-black text-white`: ``} fadeIn border-[0.5vw] lg:border-[0.1vw] px-[3vw] lg:px-[1.5vw] py-[2vw] lg:py-[0.6vw] text-[3vw] lg:text-[1vw] flex items-center justify-center gap-2 dark:border-white border-black`}
    onClick={onClick}
    >{children}</button>;
}
import classNames from "classnames";

interface ButtonProps {
    onClick?: () => void;
    className: string;
    testId?: string;
    type?: "submit" | "button" | "reset";
    children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    testId,
    className,
    type = "submit",
}) => {
    return (
        <button
            type={type}
            data-testid={testId}
            onClick={onClick}
            className={classNames(
                "bg-blue-400 p-2 rounded-lg hover:bg-blue-600 text-black",
                className
            )}
        >
            {children}
        </button>
    );
};

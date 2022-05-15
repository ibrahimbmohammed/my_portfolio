interface GridProps {
    gridCols?: string;
    className: string;
    children: React.ReactNode | React.ReactNode;
}

const Grid = ({ gridCols = '4', className, children }: GridProps) => {
    return <div className={`grid grid-cols-${gridCols} gap-4 w-full ${className}`}>{children}</div>;
};

export default Grid;

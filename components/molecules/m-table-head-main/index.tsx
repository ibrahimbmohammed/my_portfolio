interface TableHeadProps {
    tableRowClassName?: string;
    tableHeadClassName?: string;
    tableHeadItems: Array<string>;
}

const TableHead = ({
    tableRowClassName,
    tableHeadClassName,
    tableHeadItems = [],
}: TableHeadProps) => {
    return (
        <tr className={`rounded-lg text-left  font-light text-primaryColor ${tableRowClassName}`}>
            {tableHeadItems.map((singleTableItem) => (
                <th className={`p-2 ${tableHeadClassName}`}>{singleTableItem}</th>
            ))}
        </tr>
    );
};

export default TableHead;

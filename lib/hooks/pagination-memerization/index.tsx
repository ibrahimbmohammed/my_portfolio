import { useState, useMemo, Dispatch, SetStateAction } from 'react';

interface useMemorisedPaginatedDataProps<Arg> {
    arrayData: Arg | undefined;
    pageSize: number;
}

const useMemorisedPaginatedData = <Arg,>(
    arrayData: useMemorisedPaginatedDataProps<Arg>['arrayData'],
    pageSize: useMemorisedPaginatedDataProps<Arg>['pageSize'] = 5,
): [Arg, number, number, Dispatch<SetStateAction<number>>] => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return arrayData instanceof Array && arrayData?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, arrayData]);
    return [currentTableData as unknown as Arg, currentPage, pageSize, setCurrentPage];
};

export default useMemorisedPaginatedData;

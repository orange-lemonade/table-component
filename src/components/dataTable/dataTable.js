import React from "react";


const DataTable = (props) => {
    const { columns, rows } = props;

    return (
        <>
            <p>hi</p>
            {columns.length}
            {columns.forEach(x => x.name)}
            {rows.map(x => x.accessor)}
        </>
    );
};

export default DataTable;
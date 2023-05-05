'use client'

/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { useTable, useSortBy, ColumnInstance, TableToggleHideAllColumnProps, Row, HeaderGroup } from "react-table";
import Checkbox from "./checkbox-component";

interface DatatableProps {
  data: any[];
  columns: any[];
  checkbox?: boolean;
}

interface CellProps {
    value?: any | undefined;
    row?: any | undefined;
}[]
interface visibleColumnsProps {
    Header: string;
    Cell?: string
}

const DatatableComponent = ({ data, columns, checkbox }: DatatableProps) => {
//   const tableData = useMemo(() => data, [data]);
//   const tableColumns = useMemo(
//     () => columns.map(d => {
//         return {
//             Header: d.title,
//             accessor: d.value,
//             // Cell: ({props}: {props: CellProps}) => {
//             //     const { value, row } = props
//             //     console.log('value', value)
//             //     return value
//             // }
//         }
//     }),
//     []
//   );

//   const tableInstance = useTable(
//     {
//       columns: tableColumns,
//       data: tableData
//     },
//     useSortBy,
//     hooks => {
//         console.log('hookx', hooks)
//     if (checkbox) {
//         // ColumnInstance<visibleColumnsProps>
//         hooks.visibleColumns.push((column) => {
//             console.log('column visible', column)
//             return [
//             {
//                 id: 'selection',
//                 Header: ({getToggleAllRowsSelectedProps}: {getToggleAllRowsSelectedProps: any}, props) => {
//                     console.log('props', props)

//                     return (
//                         <Checkbox {...getToggleAllRowsSelectedProps()} style={{ width: '15px', height: '15px' }} />
//                         )
//                 }
//               ,
//                 Cell: ({ row }: { row: any }) => (
//                 <Checkbox {...row.getToggleRowSelectedProps()} style={{ width: '15px', height: '15px' }} />
//                 ),
//             },
//             ...column,
//             ];
//         });
//         } 
//     }
//   );
    
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     getToggleHideAllColumnsProps,
//     allColumns ,
//   } = tableInstance;

const defaultColumn = useMemo(
    () => ({
      width: 150
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    flatColumns,
    setColumnOrder,
    state,
    getToggleHideAllColumnsProps,
    allColumns
  }: {
    getTableProps: any;
    getTableBodyProps: any;
    headerGroups: HeaderGroup<object>[];
    rows: Row<object>;
    prepareRow: (row: Row<object>) => void;
    flatColumns: any;
    setColumnOrder: any;
    state: any;
    getToggleHideAllColumnsProps: TableToggleHideAllColumnProps;
    allColumns: Array<ColumnInstance<object>>;
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useColumnOrder,
    useAbsoluteLayout
  );
  const currentColOrder = useRef();
  const IndeterminateCheckbox: ForwardRefExoticComponent<
    {
      indeterminate: ReactNode;
    } & RefAttributes<unknown>
  > = forwardRef(
    ({ indeterminate, ...rest }: { indeterminate: ReactNode }, ref) => {
      const defaultRef = useRef();
      const resolvedRef: MutableRefObject<ReactNode> =
        ref || currentColOrder || defaultRef;

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return <input type="checkbox" ref={resolvedRef} {...rest} />;
    }
  );

  return (
    <main className="section">
         <div className="grid grid-cols-2 gap-2 w-[500px] mb-5">
              <div>
                <Checkbox {...getToggleHideAllColumnsProps()} />
                Toggle All
              </div>
              {allColumns.map(column => (
                <div key={column.id}>
                  <label className="pr-2">
                    <input type="checkbox" {...column.getToggleHiddenProps()} className="mr-2" />
                    {column.Header}
                  </label>
                </div>
              ))}
            </div>
      <div className="container">
          <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup, idxGroup) => {
                    return (
                        <tr key={idxGroup} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, columnIdx) => {
                                return (
                                    <th
                                     key={columnIdx}
                                     {...column.getHeaderProps()}
                                     >
                                      <div>{column.render('Header')}</div>
                                    </th>
                                )
                            })}
                        </tr>
                    )
                }) }
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row,  i) => {
                    prepareRow(row)
                    return (
                        <tr key={i} {...row.getRowProps()}>
                            {row.cells.map((cell,idx) => {
                                return (
                                    <td key={idx} {...cell.getCellProps()} className='px-3 py-2'>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    </main>
  );
}
export default DatatableComponent
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import {Link} from 'react-router-dom';


const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      headerClassName: 'headerGrid',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            //   onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
const Datatable = ()=>{
    return <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new"  className="link">
          Add New
        </Link>
      </div>
      <DataGrid

      className="dataGrid"
    rows={userRows}
    columns={userColumns.concat(actionColumn)}
    pageSize={10}
    rowsPerPageOptions={[10]}
    checkboxSelection
  /></div>
}


export default Datatable;
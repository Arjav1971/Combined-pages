
import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./Campaigns.css";
import "./Inventory.css";
import searchIcon from "../assets/Searchsearchicon.svg";
import Active from "../assets/active.svg";
import inActive from "../assets/inactive.svg";
import logoplus from "../assets/$dyte-iconplus.svg";
import CustomDropdown from "../container/components/CustomDropdown";
import DeleteRow from "../container/components/DeleteRow";
import { Menu } from 'antd';
import campaignData from '../container/components/list-data/campaignData';
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuid } from "uuid";
import { nanoid } from 'nanoid'
import EndCampaignModal from '../modal/EndCampaignModal';

function StatusCell(props) {
  if (props.value === true) {
    return <img src={Active} />;
  }
  else {
    return <img src={inActive} />;
  }
}

export function SortedDescendingIcon() {
  return <FilterListIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <FilterListIcon className="icon" />;
}

export function UnsortedIcon() {
  return <FilterListIcon className="icon" />;

}

const initialRows = [
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 14, status: true },
  { id: nanoid(), type: 'Showroom / Retail', locality: 'Varsova, Sector - 7', size: 31, status: true },
  { id: nanoid(), type: 'Office Space', locality: 'Varsova, Sector - 7', size: 31, status: true },
  { id: nanoid(), type: 'Flat', locality: 'Varsova, Sector - 7', size: 31, status: false },
  { id: nanoid(), type: 'Villa / Bangalow', locality: 'Varsova, Sector - 7', size: 11, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 10, status: false },
  { id: nanoid(), type: 'Showroom / Retail', locality: 'Varsova, Sector - 7', size: 150, status: true },
  { id: nanoid(), type: 'Flat', locality: 'Varsova, Sector - 7', size: 44, status: true },
  { id: nanoid(), type: 'Office Space', locality: 'Varsova, Sector - 7', size: 36, status: true },
  { id: nanoid(), type: 'Villa / Bangalow', locality: 'Varsova, Sector - 7', size: 65, status: true },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: true },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },
  { id: nanoid(), type: 'Residential-Plot', locality: 'Varsova, Sector - 7', size: 65, status: false },

];

const submenu2 = (
  <Menu>
  </Menu>
);
const Campaigns = () => {


  const navigate = useNavigate();
  const handleAddNewCampaign = () => {
    navigate('/inventory/new');
  };

  const [searchText, setSearchText] = useState("")
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [searchText],
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleEndCampaign = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  const [rows, setRows] = React.useState(initialRows);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const columns = React.useMemo(
    () => [
      { field: 'id', headerName: 'Property ID', width: 300 },
      {
        field: 'type',
        headerName: 'Type',
        width: 300,
        editable: false,
      },
      {
        field: 'locality',
        headerName: 'Locality',
        width: 300,
        editable: false,
      },
      {
        field: 'size',
        headerName: 'Size',
        type: 'number',
        align: 'left',
        headerAlign: 'left',
        editable: false,
        width: 200,
        valueGetter: (value, row) => `${row.size * 100 || ''} sq.ft`,
      },
      {
        field: 'status',
        headerName: 'Status',
        type: 'boolean',
        editable: false,
        sortable: false,
        width: 100,
        renderCell: (params) => <StatusCell {...params} />,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 60,
        getActions: (params) => [
          <DeleteRow
            label="Delete"
            showInMenu
            icon={<DeleteIcon />}
            deleteUser={deleteUser(params.id)}
          // closeMenuOnClick={false}
          />,
        ],
      },
    ],
    [deleteUser],
  );

  return (
    <div className='campgn'>
      <div className='submenu'>
        <div className="search-container">
          <input type="text" onChange={handleChange} className="form-control py-2" placeholder="Search Inventory" aria-label="Search by Campaign name" aria-describedby="basic-addon2" />
          <img src={searchIcon} className="search-icon" alt="Search" />
        </div>
        <div className='right_options'>
        <div>
            <button className='apply_filter' onClick={handleEndCampaign}><span>All Filters</span><FilterListIcon style={{ width :"20px"}}/></button>
            <EndCampaignModal visible={isModalVisible} onClose={handleCloseModal} />
          </div>
          <div>
            <button className='new_campaign' onClick={handleAddNewCampaign}>
              <img src={logoplus} alt="" />
              <p className='btn-text2'>New property</p>
            </button>
          </div>
          
        </div>
      </div>
      <Box sx={{
        ":hover": true,

        height: '100%',
        width: '100%',
        '& .MuiDataGrid-cell ': {
          // backgroundColor: 'rgba(224, 183, 60, 0.55)',
          // color: '#1a3e72',
          fontWeight: '100',
          borderColor: 'grey',
          borderWidth: '1px'
        },
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: 'rgb(230 230 230 / 55%)',
          borderColor: 'grey',
          borderWidth: '1px',
          overflow: 'visible',
        },
        // '& .MuiDataGrid-columnHeader:hover':{
        //   pointerEvents: 'none',
        // },
      }}>
        <DataGrid sx={{
          ":hover": true
        }}
          style={{ borderWidth: '1px', borderRadius: '0.6rem', background: '#fff' }}
          rowHeight={44}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 18,
              },
            },
          }}
          pageSizeOptions={[5]}
          slots={{
            columnSortedDescendingIcon: SortedDescendingIcon,
            columnSortedAscendingIcon: SortedAscendingIcon,
            columnUnsortedIcon: UnsortedIcon,
            // toolbar: GridToolbar
          }}
          filterModel={{
            items: [],
            quickFilterExcludeHiddenColumns: true,
            quickFilterValues: [searchText],
          }}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          // disableColumnFilter
          // disableColumnSelector
          // disableDensitySelector
          // disableExport
          disableColumnMenu
        // checkboxSelection 
        // disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}



export default Campaigns

import React from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Table } from 'antd';

const columns = [
  {
    title: 'Accessed By',
    dataIndex: 'name',
  
   
  },
  {
    title: 'Date Accessed',
    dataIndex: 'dateUsed',
    
  },
  
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    dateUsed: 32,
   
  },
  {
    key: '2',
    name: 'Jim Green',
    dateUsed: 42
    
  },
  {
    key: '3',
    name: 'Joe Black',
    dateUsed: 32
    
  }
  
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

class ActivityTable extends React.Component{
    render(){
        return(
            <div>
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
        );
    }
}

export default ActivityTable;
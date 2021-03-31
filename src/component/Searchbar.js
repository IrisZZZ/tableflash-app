import React, { Component } from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
class Searchbar extends Component {
    state = {  }
    render() { 
        return ( <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
          /> );
    }
}
 
export default Searchbar;
import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectDropDown = () => (
  <Space wrap>
    <Select
      defaultValue="Bán chạy nhất"
      style={{
        width: 150,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Bán chạy nhất',
          label: 'Bán chạy nhất',
        },
        {
          value: 'Trả góp 0%',
          label: 'Trả góp 0%',
        },
        {
          value: 'Giá thấp',
          label: 'Giá thấp',
        },
        {
          value: 'Giá cao',
          label: 'Giá cao',
        },
      ]}
    />
  </Space>
);
export default SelectDropDown;
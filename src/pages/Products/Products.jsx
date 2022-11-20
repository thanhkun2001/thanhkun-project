import { Button, Input, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FORM_MODE, ROUTES } from '../../constants'
import { getAllProduct } from '../../redux/actions/productAction'
const { Search } = Input
const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dataSource, setDataSource] = useState([])
  const listProduct = useSelector((state) => state.product.listProduct)
  useEffect(() => {
    dispatch(getAllProduct())
  }, [])
  useEffect(() => {
    setDataSource(listProduct)
  }, [listProduct])
  const onSearch = (value) => console.log(value)
  const handleView = (e, id) => {
    if (e) e.preventDefault()
    navigate(`/products/${FORM_MODE.VIEW}/${id}`)
  }
  const handleEdit = (e, id) => {
    if (e) e.preventDefault()
    navigate(`/products/${FORM_MODE.EDIT}/${id}`)
  }
  const handleAdd = () => {
    navigate(`/products/${FORM_MODE.ADD_NEW}`)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Original Price',
      dataIndex: 'originalPrice',
    },
    {
      title: 'Sale',
      dataIndex: 'salePrice',
    },
    {
      title: 'Promotion Percent',
      dataIndex: 'promotionPercent',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (text, item) => {
        return (
          <div>
            <button
              onClick={(e) => {
                handleView(e, text)
              }}
            >
              View
            </button>
            <button
              onClick={(e) => {
                handleEdit(e, text)
              }}
            >
              Edit
            </button>
            <button>Delete</button>
          </div>
        )
      },
    },
  ]
  return (
    <div>
      {/* {listProduct &&
        listProduct.map((item) => (
          <button onClick={(e) => handleView(e,item.id)} key={item.id}>
            {item.id}
          </button>
        ))} */}
      <div className="mb-5">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </div>
      <div>
        <Button onClick={() => handleAdd()} type="primary" style={{ float: 'right' }}>
          Add
        </Button>
      </div>
      <Table
        rowKey={(res) => res.id}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          total: dataSource?.length || 0,
        }}
      />
    </div>
  )
}

export default Products

import { Col, Form, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { FORM_MODE } from '../../../constants'
import { getProductDetails } from '../../../redux/actions/productAction'

const ProductDetail = () => {
  const [formMode, setFormMode] = useState('')
  const [form] = Form.useForm()
  let {id,mode} = useParams()
  const dispatch = useDispatch()
  const [nameProduct, setNameProduct] = useState('')
  const [originalPrice, setOriginalPrice] = useState('')
  const listProductDetail = useSelector((state) => state.product.listProductDetails)
  const editMode = FORM_MODE.EDIT
  const viewMode = FORM_MODE.VIEW
  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id))
    }
    if (mode) {
      setFormMode(mode)
    }
  }, [id,mode])

  useEffect(() => {
    if (listProductDetail && (formMode === viewMode || formMode === editMode)) {
      setNameProduct(listProductDetail.name)
      setOriginalPrice(listProductDetail.originalPrice)
      form.setFieldsValue({
        NameProduct: listProductDetail.name,
        OriginalPrice: listProductDetail.originalPrice,
      })
    }
  }, [listProductDetail])

  return (
    <>
      {/* {listProductDetail && 
        <ul>
            <li>{listProductDetail.name}</li>
            <li>{listProductDetail.originalPrice}</li>
            <li>{listProductDetail.salePrice}</li>
        </ul>
      } */}
      <Form form={form} layout="vertical" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
        <div className="p-0 px-3 mt-4">
          <Row>
            <Col md="12" className="pl-md-0">
              <Form.Item name="NameProduct" label="Name">
                <Input
                  disabled={formMode === viewMode}
                  maxLength={255}
                  value={nameProduct}
                  onChange={(e) => setNameProduct(e.target.value)}
                  autoFocus={true}
                  width="100%"
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="OriginalPrice" label="originalPrice">
                <Input
                  maxLength={255}
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  autoFocus={true}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        {/* <hr className="my-2 bg-secondary opacity-20" />
                <div className="mt-3 mb-4">
                    {formMode === viewMode ?
                        <Button variant="info" className="px-4 mr-2" type="button" onClick={handleEdit}>{t('COMMON.EDIT')}</Button> :
                        <Button variant="info" className="px-4 mr-2" type="submit">{t('COMMON.SAVE_CHANGES_BUTTON')}</Button>
                    }
                    <Button variant="dark" className="px-4" onClick={handleCancel}>{t('COMMON.CANCEL_BUTTON')}</Button>
                </div> */}
      </Form>
    </>
  )
}

export default ProductDetail

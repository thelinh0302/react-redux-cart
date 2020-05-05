import ListProducts from '../containers/Product/listProduct'
import ManagerProducts from '../containers/Product/managerProducts'
import CartProduct from '../containers/Product/cartProduct'
export const API_ANPOITS='http://localhost:3000'
export const ROUTES_Admin = [
    {
        path:'/',
        name:'Danh sách sản phẩm',
        exact:true,
        component:ListProducts
    },
    {
        path:'/manager-product',
        name:'Quản lí sản phẩm',     
        component:ManagerProducts
    },
    {
        path:'/cart',
        name:'Giỏ hàng',
        component:CartProduct
    }
]
export const STATUS  = [
    {
        value:0,
        label:'SẮP VỀ',
        badge : 'badge badge-warning'
    },
    {
        value:1,
        label:'CÒN HÀNG',
        badge : 'badge badge-success'
    },
    {
        value:2,
        label:'HẾT HÀNG',
        badge : 'badge badge-danger'
    },
    {
        value:3,
        label:'LIÊN HỆ',
        badge : 'badge badge-primary'
    }
]
export const STATUS_CODE={
    SUCCESS:200,
    CREATED:201,
    UPDATED:202
}
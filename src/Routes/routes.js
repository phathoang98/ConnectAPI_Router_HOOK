


import EditProduct from "../Page/HomeTemplate/editProduct/EditProduct";
import Home from "../Page/HomeTemplate/home/Home";
import ProductListPage from "../Page/HomeTemplate/productListPage/ProductListPage";

/**
 *  ---- File đường dẫn đến các Page
 */

const homeRoutes = [
    {
        path: '/',
        exact: true,
        component: () => <Home />
    },

    {
        path: '/product-list',
        exact: false,
        component: () => <ProductListPage />
    },

    {
        path: '/product/add',
        exact: false,
        component: ({ history }) => <EditProduct history={history} />
    },

    // -- Sửa sản phẩm (phải lấy đc "id" của sản phẩm cần sửa hiện lên đường dẫn)
    {
        path: '/product/:id/edit',
        exact: false,
        component: ({ match, history }) => <EditProduct match={match} history={history} />
    },

]


export default homeRoutes
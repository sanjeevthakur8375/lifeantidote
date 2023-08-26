import React, { useState } from "react";
import { baseUrl } from "../../../config";
import axios from "axios";
import ShopProducts from "../../components/Shop/ShopProducts";
import LayoutOne from "../../components/Layout/LayoutOne";

function Product({ data, type, className }) {
  const [product, setProduct] = useState([]);


  console.log(data, baseUrl);

  const fetchData = async () => {
    try {
      const url_pro = `${baseUrl}/api/all/products`;
      const res_pro = await axios.get(url_pro, { withCredentials: true });
      setProduct(res_pro.data.allProducts);arch
    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <LayoutOne title="Homepage 1" className="-style-1">
      <div className="container">
        <ShopProducts
          gridColClass="col-12 col-sm-6 col-md-4 col-lg-3"
          listColClass="col-12 col-lg-6"
          view={"grid"}
          data={product.slice(0, 12)}
        />
      </div>
    </LayoutOne>
  );
}

export default Product;













// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Paginator from "react-hooks-paginator";

// import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
// import { getProductbyFilter } from "../../common/productSelect";
// import LayoutOne from "../../components/Layout/LayoutOne";
// import ShopProducts from "../../components/Shop/ShopProducts";
// import ShopHeader from "../../components/Shop/ShopHeader";
// import Product from "../../components/Product";
// import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
// import ShopSidebar from "../../components/Shop/ShopSidebar";
// import { baseUrl } from "../../../config";
// import axios from "axios";

// export default function () {
//   const filterData = useSelector((state) => state.shopReducers.filter);
//   const pageLimit = 12;
//   const [offset, setOffset] = useState(0);
//   const [product, setProduct] = useState([]);
//   const [currentView, setCurrentView] = useState();
//   const [currentSort, setCurrentSort] = useState();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentData, setCurrentData] = useState([]);
//   const [productData, setProductData] = useState([]);
//   const [ categoriesData,setCategoriesData ] = useState([]);

//   const fetchData = async () => {
//     try {
//       const url_pro = `${baseUrl}/api/all/products`;
//       const res_pro = await axios.get(url_pro, { withCredentials: true });
//       setProductData(res_pro.data.allProducts);
//       const url = `${baseUrl}/api/get/all/brands`;
//       const res = await axios.get(url, { withCredentials: true });
//       setCategoriesData(res.data);
//       console.log("productData---",res_pro.data.allProducts);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useState(() => {
//     fetchData();
//   }, []);


 

//   useEffect(() => {
//     let sortedProduct = getProductbyFilter(
//       productData,
//       currentSort,
//       filterData.category,
//       filterData.priceRange.from,
//       filterData.priceRange.to,
//       filterData.brand
//     );
//     console.log(sortedProduct);
//     setCurrentData(sortedProduct);
//   }, [offset, currentSort, filterData]);
//   return (
//     <LayoutOne title="Shop Fullwidth Left Sidebar">
//       <Breadcrumb title="Shop Products">
//         <BreadcrumbItem name="Home" />
//         <BreadcrumbItem name="Shop" current />
//       </Breadcrumb>
//       <div className="">
//         <div className="shop -five-col">
//           <div className="container-full-half">
//             <div className="row">
//               <div className="col-12 col-md-4 col-lg-3 col-xl-2">
//                 <ShopSidebar categoriesData={categoriesData} />
//               </div>
//               <div className="col-12 col-md-8 col-lg-9 col-xl-10">
//                 {!productData || productData.length === 0 ? (
//                   <h1>No product found</h1>
//                 ) : (
//                   <>
//                     <div className="container">
//                       <ShopProducts
//                         gridColClass="col-12 col-sm-6 col-md-4 col-lg-3"
//                         listColClass="col-12 col-lg-6"
//                         view={"grid"}
//                         data={product.slice(0, 12)} 
//                       />
//                     </div>
//                     <Paginator
//                       pageContainerClass="paginator"
//                       totalRecords={product.length} 
//                       pageLimit={pageLimit}
//                       pageNeighbours={2}
//                       setOffset={setOffset}
//                       currentPage={currentPage}
//                       setCurrentPage={setCurrentPage}
//                     />
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </LayoutOne>
//   );
  
// }





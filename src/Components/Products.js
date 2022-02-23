import React from "react";
import products from "../data/products";

//For Future Updates Only

const Products = () => {
    const uniqueProducts = [...new Set(products.map(({ productCategory }) => productCategory))];
    console.log(uniqueProducts)
    return (
        <section>
            <h1>Latest Products</h1>
            {
                uniqueProducts.map((product) => {
                    return <button>
                        {product}
                    </button>
                })
            }
        </section>
    );
}

export default Products;
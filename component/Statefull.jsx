import React from "react";
import Button from "./Button";
function Statefull(){
    const [products,setProducts]=React.useState([
        {
            id:1,
            name: "products1",
        }
    ])
    const isAddproduct=true
    function handleAddProducts(){
        const newProducts = {
            id: products.length + 1,
            name:`products ${products.length+1}`,
        }
        const res=[...products];
        res.push(newProducts);
        setProducts(res);
    }
    console.log("products",products);
    return(
        <div>
            <h2>statefull</h2>
            {products.map(product =>{
                return (
                    <div key={product.id}>
                       <h3>{product.name}</h3>
                    </div>
                )
            })}
            <button type="button" onClick={handleAddProducts}>submit</button>
            <button text="Addproduct" onClick={handleAddProducts} isAddproduct="isAddproduct"></button>
        </div>
    )
}
export default Statefull;
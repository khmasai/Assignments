import CategoryItem from "./CategoryItems"
import style from "./category_design.css";
const ListItems = ()=>{
    return (
        <>
         <div className={style.card}>
            <CategoryItem title="Grocery" url="https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg"/>
         </div>
         <div className={style.card}>
           <CategoryItem title="Vegetables" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcOK9h2oZBD3LgsFVx4eTJE-0uEw6h_WYPA&usqp=CAU"/>
         </div>
         <div className={style.card}>
           <CategoryItem title="Toilatories" url="https://media.gettyimages.com/photos/toiletries-and-hygiene-products-picture-id458984207?s=612x612"/>
         </div>
         
        </>
    )
}

export default ListItems

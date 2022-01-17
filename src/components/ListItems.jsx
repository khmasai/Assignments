import CategoryItem from './CategoryItem'
import style from './category.css'

export default function ListItems (){
    return (
        <>
         <div className={style.category_design}>
            <CategoryItem title="Grocery" url="https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg"/>
         </div>
         <div className={style.category_design}>
           <CategoryItem title="Vegetables" url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg"/>
         </div>
         <div className={style.category_design}>
           <CategoryItem title="Toiletaries" url="https://media.gettyimages.com/photos/toiletries-and-hygiene-products-picture-id458984207?s=612x612"/>
         </div>
         <div className={style.category_design}>
            <CategoryItem title="Mobiles" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY232_CB431401553_.jpg"/>
         </div>
        </>
    )
    
}

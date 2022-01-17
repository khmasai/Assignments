export default function CategoryItem({label, url}){
    
    return(
        <div>
                <img url={url} alt="label" />
                <h2>{label}</h2>
        </div>

    )

}
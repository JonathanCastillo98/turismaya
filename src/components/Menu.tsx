import MenuCategories from "./MenuCategories"
import MenuPosts from "./MenuPosts"

const Menu = () => {
    return (
        <div className="hidden flex-[2_1_0%] flex-col mt-[60px] lg:flex">
            <h2 className="text-[gray] text-[16px] font-[400]">Tendencia</h2>
            <h1 className="text-[28px] font-bold">Populares</h1>
            <MenuPosts />
            <h2 className="text-[gray] text-[16px] font-[400]">Descubre por tema</h2>
            <h1 className="text-[28px] font-bold">Categorias</h1>
            <MenuCategories />
        </div>
    )
}
export default Menu
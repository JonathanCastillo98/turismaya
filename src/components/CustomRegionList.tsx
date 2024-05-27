
type TRegion = {
    name: string;
    color: string;
    path: string;
}

type Props = {
    regions: TRegion[];
}

const CustomRegionList = ({ regions }: Props) => {
    return (
        <ul>
            {regions.map((region, index) => (
                <li
                    key={index}
                    className={`flex flex-row justify-center items-center gap-2 mb-4 cursor-pointer`}>
                    <span
                        className={`w-[24px] h-[24px] rounded-[50%]`}
                        style={{ backgroundColor: region.color }}
                    ></span>
                    <span>{region.name}</span>
                </li>
            ))}
        </ul>
    )
}
export default CustomRegionList
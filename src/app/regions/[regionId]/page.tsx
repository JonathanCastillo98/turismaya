import Map from "@/components/Map";

type Props = {
    params: {
        regionId: string
    }
}

const Region = ({ params }: Props) => {
    const { regionId } = params;
    return (
        <Map regionId={regionId} />
    )
}
export default Region
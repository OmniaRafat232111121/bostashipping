import Language from "../../shared/Language"
import SearchBox from "../SearchBox"

const Home = () => {
  return (
    <div>
       <SearchBox
        title={Language.SHIPMENT_TRACKING.TRACK_YOUR_SHIPMENT}
        variant="h4"
      />
    </div>
  )
}

export default Home
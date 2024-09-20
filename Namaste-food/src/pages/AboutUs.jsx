import AboutUsClass from "../component/AboutUsClass"
import { AboutUsFunction } from "../component/AboutUsFunction"

export const AboutUs = ()=>{
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <AboutUsClass name={"Prince Yadav (Class comp)"} location={"Greater Noida"} contact={"prince981620@gmail.com"} />
            </div>
        </div>
    )
}
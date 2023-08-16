
import Layout from "../components/Layout/Layout"


const Policy = ()=>{

    return(
        <Layout>
             <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We give you the ability to edit your account information and preferences at any time</p>
          <p>We working to protact the security of yours information during transmission by using <b>Secure Software Layers</b></p>
          <p>We reserve the rigth to modify or amend this policy notice at any time. </p>
        </div>
      </div>
        </Layout>
    )
}
export default Policy;
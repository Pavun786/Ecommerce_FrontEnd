import Layout from "../components/Layout/Layout"


const About =()=>{

    return(
        <Layout>
            <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          BuyCart Private Limited is an Indian e-commerce company, headquartered in chennai, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, etc. 
         </p>
        </div>
      </div>
        </Layout>
    )
}

export default About;
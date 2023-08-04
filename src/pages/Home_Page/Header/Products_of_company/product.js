import "../Products_of_company/products.css"

import joystik from '../../Assets/images/joy_stick 1.png'


function Products() {
  return (

    <section className="aboutProduct">

      <div className="left_side_of_product">
        <p className="left_side_of_product_title">3D game Dev </p>
        <h1 className="left_side_of_product_subtitle" >Work that we produce for our clients</h1>
        <p className="left_side_of_product_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>


        <a href="#">
        Get more details
        </a>

      </div>

      <div className="controller_container">
        <div className="controller_images">
          <img src={joystik} alt="joyst" />
         
        </div>
      </div>

    </section>
  )
}
export default Products
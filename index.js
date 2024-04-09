import ReactDOM from 'react-dom'
import './style.css'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
  <div className='navbar'>
   <div className='logo'>
         <img src="fashionhub.png" alt="" width="80px"/> 
         </div>
         <div className='links'>
         <a href="Men">Men</a>
         <a href="Men">Women</a>
         <a href="Men">Kids</a>
         <a href="Men">Accessories</a>
         </div>
         <div className='col-md-6'>
      <div className='searchbar'>
      <input type='text' className='form-control'placeholder='Search for products and more....' width="100px"/>
         </div>
         </div>
            <div className='profile'>
          <a href='#'> 
           <span class="material-symbols-outlined">person</span>
           <span class="material-symbols-outlined">shopping_cart</span>
         </a>  
         </div>
         </div>
         <br/>
      <div className='banner'>
         <a href='#'><img src='banner3.jpg' alt="" width="1500px"height="600px"/></a>
      </div>
      <div className='coupon'>
         <a href='#'><img src="coupon3.webp" alt=""width="750px" height="250px" /></a>
      </div>
      <div className='sbc'>
         <h1>Shop By Category</h1>
      </div>
      <div className='container'>
         <div className='row'>
               <div className='categories'><a href=''><img src='mensethnic.jpg' alt="" id='img1' width="220"height="180"/>
               <br/>
               Mens Ethnic Wear 
               <br/>
               <h1>50-80% OFF</h1>
               Shop Now
               </a>
               </div>

               <div className='categories'><a href=''><img src="wew1.webp" alt=""id="img2" width="220"height="180"/>
               <br/>
               Womens Ethnic Wear 
               <br/>
               <h1>40-80% OFF</h1>
               Shop Now
               </a></div>
               
               <div className='categories'><a href=''><img src="men activewear.jpg" alt=""id="img3" width="220"height="180"/>
               <br/>
              Mens Active Wear 
               <br/>
               <h1>30-70% OFF</h1>
               Shop Now
               </a></div>

               <div className='categories'><a href=''><img src="western wear.webp" alt=""id="img4" width="220"height="180"/>
               <br/>
             Womens Western Wear 
               <br/>
               <h1>40-80% OFF</h1>
               Shop Now
               </a></div>
            </div>
         </div>
         <div className='container'>
         <div className='row'>
               <div className='categories'><a href=''> <img src="kids.webp" alt=""id="img5" width="220"height="180"/>
               <br/>
             Kids Wear 
               <br/>
               <h1>30-80% OFF</h1>
               Shop Now
               </a></div>
               <div className='categories'><a href=''><img src="sportswear.webp" alt=""id="img6" width="220"height="180"/>
               <br/>
             Sports Wear 
               <br/>
               <h1>30-60% OFF</h1>
               Shop Now
               </a></div>
               <div className='categories'><a href=''><img src="watches.webp" alt=""id="img7" width="220"height="180"/>
               <br/>
             Watches
               <br/>
               <h2>UP TO 80%OFF</h2>
               Shop Now
               </a></div>
               <div className='categories'><a href=''><img src="smart.webp" alt=""id="img8" width="220"height="180"/>
               <br/>
             Womens Western Wear 
               <br/>
               <h2>UP TO 70%OFF</h2>
               Shop Now
               </a></div>
            </div>
         </div>
         <div className='container'>
         <div className='row'>
               <div className='categories'><a href=''> <img src="sneakers.webp" alt=""id="img9" width="220"height="180"/>
               <br/>
             Sneakers 
               <br/>
               <h1>30-80% OFF</h1>
               Shop Now
               </a></div>
               <div className='categories'><a href=''><img src="beauty.jpg" alt=""id="img10" width="220"height="180"/>
               <br/>
             Beauty Products 
               <br/>
               <h1>30-60% OFF</h1>
               Shop Now
               </a></div>
               <div className='categories'><a href=''><img src="mc.webp" alt=""id="img11" width="220"height="180"/>
               <br/>
            Mens Casuals
               <br/>
               <h2>UP TO 80%OFF</h2>
               Shop Now
               </a></div>
               <div className='categories'><a href=''><img src="smart.webp" alt=""id="img12" width="220"height="180"/>
               <br/>
             Womens Western Wear 
               <br/>
               <h2>UP TO 70%OFF</h2>
               Shop Now
               </a></div>
            </div>
         </div>
         <footer>
            <div id='os'>
            <h4 id='online'>ONLINE SHOPPING</h4>
            <br/>
            <a href=''>Men</a>
            <br/>
            <a href=''>Women</a>
            <br/>
            <a href=''>Kids</a>
            <br/>
            <a href=''>Womens Ethnic Wear</a>
            <br/>
            <a href=''>Beauty</a>
            <br/>
            <a href=''>Accessories</a>
            <br/>
            <a href=''>Watches</a>
            <br/>
            <a href=''>Sneakers</a>
            <br/>
            <a href=''>Mens Ethnic Wear</a>
            <br/>
            <br/>
            <h4 id='online'>USEFUL LINKS</h4>
            <br/>
            <a href=''>Blog</a>
            <br/>
            <a href=''>Careers</a>
            <br/>
            <a href=''>Site Map</a>
            <br/>
            <a href=''>Corporate information</a>
            <br/>
            <a href=''>Whitehat</a>
            <br/>
            <a href=''>Cleartrip</a>
            <br/>
            </div>
            <div id='cp'>
               <h4 id='online'>CUSTOMER POLICIES</h4>
               <br/>
            <a href=''>Contact Us</a>
            <br/>
            <a href=''>FAQ</a>
            <br/>
            <a href=''>T&C</a>
            <br/>
            <a href=''>Terms of Use</a>
            <br/>
            <a href=''>Track Orders</a>
            <br/>
            <a href=''>Shipping</a>
            <br/>
            <a href=''>Cancellation</a>
            <br/>
            <a href=''>Returns</a>
            <br/>
            <a href=''>Privacy Policy</a>
            <br/>
            <a href=''>Grievance Offer</a>
            <br/>
            </div>
            <div id='kp'>
               <h4 id='online'>KEEP IN TOUCH</h4>
               <br/>
               <a href=''></a>
            </div>
         </footer>
         <br/>
         <hr/>
         <br/>
         <div id='address'>
            <h4 id='online'>Registered Office address</h4>
            <br/>
            Buildings Alyssa,
            <br/>
            Begonia and Clover Situated in Embassay Tech Village,
            <br/>
            Outer Ring Road,
            <br/>
            Devarabeesanhalli Village,
            <br/>
            Varthur Hobli,
            <br/>
            Hyderabad -560103, India
         </div>
         <br/>
          <hr/>
          <br/>
         <div id='osme'>
         <h4 id='online'>ONLINE SHOPPING MADE EASY AT FASHION HUB</h4>
         <br/>
         If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
         </div>
         <br/>
         <hr/>
         <br/>
          <div id='copy'>@ Copy rights 2024 www.fashionhub.com.All rights reserved</div>
          <br/>
          <br/>
      </>

)
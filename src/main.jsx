import ReactDOM from 'react-dom/client';
import COURSES from './Components/COURSES';
import "./Style.css"
import Footer from './Components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  
 <div className='grid sm:grid-cols-3 gap-y-10 my-10'>
  
   <COURSES image= "https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2FCdldfleJ_qeUyRIv352mK.jpeg&w=640&q=75" button= "Web development" name="Noradiin Zubeyr" Money="USD 130 For one Year" describtion="Ai-Powered SaaS With Next.js, Typscript , Prisma & Open Ai"  />
   <COURSES image= "https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2F3fr6VASKAxobQaZytb_NE.jpeg&w=640&q=75" button="Graphic Desing" name="Warsame Gedi" Money="USD 20 For Life Time Access" describtion="Graphic Desing MasterClass Beginerns Guide to Adobe photoshop CC" />
   <COURSES image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2F64jEPy6E4Waa5VK5u3EOc.jpeg&w=640&q=75" button="Data Visualisation" name="AbdiNasir Maow" describtion="Step By Step Data Visualisation Using Tableau 2024" Money="USD 100 For One Half Year" />
   <COURSES image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2Fo9DwUP_WiLdxlA58kmVAk.jpeg&w=640&q=75" button="Retouching" name="Naima Ali" describtion="Advanced Portariat Retouching Course" Money="USD 55 For life Time Access" />
   <COURSES image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2FstSoZ4J1p19mO-PX2D3O-.jpeg&w=640&q=75" button="React" name="Mo Omar" describtion="Ract MasterClass With Redux, Hooks, Firebase, Tailwind Css , GrphQl" Money="USD 110 For 2 years"  />
   <COURSES  image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2Fc3p99MJoj0zs9oe5Y0ue8.jpeg&w=640&q=75" button="Mobile App" name="Abubakar" describtion="Flutter Mobile App Development With Dart " Money="USD 60 For Life Time Access" />
   <COURSES image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2FWzgNj-KvgzLh-FI_9ZEeZ.jpeg&w=640&q=75" button="Web Development" name="Abdi Rizak" Money="UDS 30 dollar For Life Time Access" describtion="Modren HTML and Css"  />
   <COURSES image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2F_coyrVhIdDmQrqBipIR6G.jpeg&w=640&q=75"  button="Php" name="Mahad Ali" Money="USD 22 dollar For Life Time" describtion="Php For Professionals" />
   <COURSES image="https://dugsiiye.com/_next/image?url=https%3A%2F%2Fdugsiiyeimages.s3.ap-south-1.amazonaws.com%2FfhJJwg8_0xMpInHoTF7X3.jpeg&w=640&q=75" button="JavaScript" Money="USD 89 dollar For Life Time Access" name= "Ahmed Abdulle" describtion= "Modren JavaScript For Beginners" />
   <Footer />
   

 </div>

)
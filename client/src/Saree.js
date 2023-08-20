import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import SingleCard from './component/SingleCard'
import { useFilterContext } from './context/filtercontext'
import Sidebar from './component/Sidebar'
import Loading from './component/Loading'

 
const Saree = () => {

  const { filter_saree } = useFilterContext();

  window.scrollTo({ top: 0, left: 0 });


  return (
    <>
      <Wrapper>
        <div id="content">


          <div className="sidebar">
            <div className="sidebarsticky">
              <Sidebar />
            </div>

          </div>



          <div className="seccolumn">
            <div className="gridtop">
              <p>{`${filter_saree.length} Product Available`}</p>
            </div>


            <div className="productcont">

              {filter_saree.map((curElem) => {
                return <SingleCard key={curElem._id} {...curElem} hover ={false} product = "Saree" index = {curElem.index}/>;
              })}

            </div>
          </div>

        </div>
      </Wrapper>
    </>
  )
}


const Wrapper = styled.section`

        #content{
            margin-top:10px;
            display: flex;
            width: 100%
        }

        .sidebar{
            /* background-color: antiquewhite; */
            border-right: 1px solid #e8e8e8;
            width: 20%;
            margin-top: 40px;
            padding: 0px 0px 40px 2%;
            
            
        }

        .sidebarsticky{
            position: sticky;
            top: 70px;
            /* z-index: -1; */
        }

        

        .seccolumn{
          display:flex;
          width: 80%;
          flex-direction: column;
          align-items: center;
        }

        .gridtop{
          margin-top:10px;
          color:rgb(204, 204, 204); 
        }

        .productcont{
          margin-top:20px;
            width: 95%;
            display: grid;
            grid-template-columns:repeat(4,20%);
            justify-content: space-around;
            grid-gap: 50px 40px;
        }

        @media (max-width: 1024px)
        {

          .sidebar{
            width: 25%;
          }

          .seccolumn{
            width: 75%;
          }



          .productcont{
          width: 100%;
          grid-template-columns: repeat(3,28%);
          gap: 13px 0px;
        }

        }

        

 


        @media (max-width: 768px)
        {
          #content {
            display: block;
          }

          .sidebar{
            background-color: white;
            padding-bottom: 0px;
            position: sticky;
            top: 90px;
            z-index: 9;
            width: 100%;
          }

          .sidebarsticky{
            position: initial;
          }

          .seccolumn{
            width: 100%;
          }

          .productcont{
          width: 100%;
          grid-template-columns: repeat(3,30%);
          gap: 13px 0px;
        }



        }


        @media (max-width: 426px ){

        .productcont{
          width: 100%;
          grid-template-columns: repeat(2,49%);
          gap: 13px 0px;
        }


         }



`

export default Saree
const Cards = ({ image, bgcolor, margintop }) => {
    return (
       <div
         className={`flex flex-col bg-${bgcolor} h-[400px] lg:w-[268px] w-[250px] items-center justify-center border-2 border-black rounded-xl ml-4 mt-[${margintop}]`}
         style={{ marginTop: margintop,backgroundColor:bgcolor }}
       >
         <div className="flex flex-col p-2">
           <h1 className=" text-xl "> Set Up Your Wallet</h1>
           <p className=" p-4">
             Ensure there's some Sol in your wallet to exchange for $Momo. If you
             don't have any Sol , you can either buy it directly on exchange and
             transfer it to your wallet.
           </p>
         </div>
   
         <div className="h-[100px] w-[100px] rounded-full mt-10 ml-[70px]">
           <img src={image} alt="" />
         </div>
       </div>
    );
   };
   
   export default Cards;
   
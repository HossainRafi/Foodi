export const Menu = () => {
  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          {/* text section */}
          <div className="text-center space-y-7 px-4">
            <h2 className="text-4xl md:text-5xl font-bold md:leading-snug leading-snug capitalize">
              for the love of delicious{" "}
              <span className="text-green">food</span>
            </h2>
            <p className="md:w-4/5 mx-auto text-xl text-[#4A4A4A]">
              Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full capitalize">
              order now
            </button>
          </div>
        </div>
      </div>


      
    </div>
  );
};

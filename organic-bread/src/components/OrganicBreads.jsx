export default function OrganicBreads() {
  return (
    <section className=" bg-[#e5e5e5]">
      <div className="mx-6 md:mx-12 lg:mx-32">
        <div className=" pt-16">
          <h2 className="font-montserrat text-3xl text-center">
            Organic Breads
          </h2>
        </div>
        <div className=" mt-12">
          <div className="grid grid-cols-1">
            <div className="card-1 bg-white px-5 pt-5 pb-7">
              <div>
                <img
                  src="src/assets/images/img-card-1.jpg"
                  alt="imagem de um pão"
                />
              </div>
              <div className="text-center">
                <h3 className="my-5 font-montserrat font-bold text-lg">
                  WHITE BREAD
                </h3>
                <p className="font-openSans italic px-5">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
                <a href="#" className=" mt-5 block">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

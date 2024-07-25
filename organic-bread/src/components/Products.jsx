export default function Products() {
  return (
    <section className="bg-[url('./assets/images/image-1.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="mx-6 md:mx-12 lg:mx-32 text-white">
        <div className="text-center pt-[252px]">
          <h1 className=" text-3xl lg:text-5xl font-semibold font-montserrat">
            Our Products
          </h1>
          <p className="text-lg lg:text-xl mt-8 lg:mx-48 font-openSans">
            Vitae turpis massa sed elementum tempus egestas sed sed. Blandit
            massa enim nec dui nunc mattis enim.
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row items-center lg:justify-center gap-8 pt-10 pb-16">
          <li>
            <a href="#">bakery</a>
          </li>
          <li>
            <a href="#">cookies</a>
          </li>
          <li>
            <a href="#">cakes</a>
          </li>
          <li>
            <a href="#">other</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

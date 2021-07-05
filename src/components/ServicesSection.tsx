export default function ServicesSection() {
  return (
    <>
      <div className="text-center py-9">
        <h6 className="text-red-500 font-medium title">Services</h6>
        <h3 className="font-bold text-4xl text-gray-800">What We Do</h3>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-8">
        <div className="border-2 p-4 col-span-1">
          <div className="md:flex grid lg:flex justify-between items-center">
            <img src="/images/ux.png" alt="" className="md:order-1 lg:order-1 order-2 w-24" />
            <h4 className="text-4xl text-gray-200 font-bold md:order-2 lg:order-2 order-1 mb-4">01</h4>
          </div>
          <h4 className="text-2xl font-bold py-3.5 text-gray-800">Photography</h4>
          <div className="text-gray-500">
            <p>A state of the art Media Studios with stunning and impeccable Photo solutions, customised and exotic frames. We deliver excellent outdoor programmes.</p>
          </div>
        </div>
        <div className="border-2 p-4 col-span-1">
          <div className="md:flex grid lg:flex justify-between items-center">
            <img src="/images/remote.png" alt="" className="md:order-1 lg:order-1 order-2 w-24" />
            <h4 className="text-4xl text-gray-200 font-bold md:order-2 lg:order-2 order-1 mb-4">02</h4>
          </div>
          <h4 className="text-2xl font-bold py-3.5 text-gray-800">Videography</h4>
          <div className="text-gray-500">
            <p>We provide quality Video Coverage and Editing for Weddings, Traditional Marriages, Birthdays and Other Events</p>
          </div>
        </div>
        <div className="border-2 p-4 col-span-1">
          <div className="md:flex grid lg:flex justify-between items-center">
            <img src="/images/graphics-design.png" alt="" className="md:order-1 lg:order-1 order-2 w-24" />
            <h4 className="text-4xl text-gray-200 font-bold md:order-2 lg:order-2 order-1 mb-4">03</h4>
          </div>
          <h4 className="text-2xl font-bold py-3.5 text-gray-800">Graphic Design</h4>
          <div className="text-gray-500">
            <p>It's easy to walk in with raw manuscripts/sketches and return home smiling with top excellent graphic
              outputs available at the mall. We also offer online graphic services to clients in remote location</p>
          </div>
        </div>
        <div className="border-2 p-4 col-span-1">
          <div className="md:flex grid lg:flex justify-between items-center">
            <img src="/images/billboard.png" alt="" className="md:order-1 lg:order-1 order-2 w-24" />
            <h4 className="text-4xl text-gray-200 font-bold md:order-2 lg:order-2 order-1 mb-4">04</h4>
          </div>
          <h4 className="text-2xl font-bold py-3.5 text-gray-800">Ads/Billboards</h4>
          <div className="text-gray-500">
            <p>We help businesses market their brands by giving high quality billboard adverts and posters.</p>
          </div>
        </div>
        <div className="border-2 p-4 col-span-1">
          <div className="md:flex grid lg:flex justify-between items-center">
            <img src="/images/print.png" alt="" className="md:order-1 lg:order-1 order-2 w-24" />
            <h4 className="text-4xl text-gray-200 font-bold md:order-2 lg:order-2 order-1 mb-4">05</h4>
          </div>
          <h4 className="text-2xl font-bold py-3.5 text-gray-800">Prints</h4>
          <div className="text-gray-500">
            <p>Print high quality images, billboards, photos.</p>
          </div>
        </div>
        <div className="border-2 p-4 col-span-1">
          <div className="md:flex grid lg:flex justify-between items-center">
            <img src="/images/format.png" alt="" className="md:order-1 lg:order-1 order-2 w-24" />
            <h4 className="text-4xl text-gray-200 font-bold md:order-2 lg:order-2 order-1 mb-4">06</h4>
          </div>
          <h4 className="text-2xl font-bold py-3.5 text-gray-800">Large Formats</h4>
          <div className="text-gray-500">
            <p>A fully equiped printing press with Prepress and Postpress. Printing Solution: Embossment,
              Industrial Laminations, Di Printing, Colour Separation etc.</p>
          </div>
        </div>
      </div>
    </>
  )
}
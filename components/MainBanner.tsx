

const MainBanner = (props: { children: React.ReactNode }) => {
  return (
    <section className="bg-[url('/hero-cussupport.jpg')] bg-cover bg-center">
      <div className="2xl:container mx-auto py-16 pb-72">
        {props.children}
      </div>
    </section>
  ) 
}

export default MainBanner;
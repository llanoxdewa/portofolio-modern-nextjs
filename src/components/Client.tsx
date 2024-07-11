
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { testimonials } from "@/data/data"
import { companies } from "@/data/data"



const Client = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Client that i have worked with
      </h1>
      <div className="h-fit p-4 flex flex-wrap items-center justify-evenly gap-16 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          speed="normal"
          direction="right"
        />
      </div>
      <div className="mt-10 mx-auto flex flex-wrap gap-4 justify-center items-center p-4 max-w-[80vw]">
        {companies.map(({ id, name, img, nameImg }) =>
          <div className="flex flex-wrap justify-center gap-2 md:max-w-60 max-w-32" key={id}>
            <img src={img} alt={name} />
            <img src={nameImg} alt={name} />
          </div>
        )}
      </div>
    </div>
  )
}


export default Client;


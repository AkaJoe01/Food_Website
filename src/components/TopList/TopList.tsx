const FoodDate = [
    {
        image: "/images/bread.jpg",
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Bread",
        desc: "Nutrient-packed, rustic, and hearty.",
    },

    {
        image: "/images/Egg_Veges.jpg",
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Egg Veges",
        desc: " A healthy, savory mix of garden greens and eggs.",
    },

    {
        image: "/images/Egg.jpg",
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Egg",
        desc: "Energizing, fresh, and essential for morning fuel.",
    },
]

const TopList = () => {
  return (
    <div className="container py-14">
        {/* header section */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold">Top List</h1>
            <p>Our top list</p>
        </div>

        {/* card section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FoodDate.map((item, index) => (
                <div
                    key={index}
                    className="bg-white/50 p-3 rounded-3xl hover:scale-110 transition duration-300"
                >
                    <img 
                        src={item.image}
                        alt={item.name}
                        className='w-40 h-40 mx-auto object-cover rounded-full'
                    />
                    <div className='space-y-2'>
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-red-500">{item.rating}</p>
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopList
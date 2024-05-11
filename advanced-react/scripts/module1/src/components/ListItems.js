const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "https://picsum.photos/200/300/?random",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "hhttps://picsum.photos/200/300/?random",
        price: "$4.50"
    },
    {
        id: "3",
        title: "Chocolate flavour",
        description: "Unexpected flavour",
        image: "https://picsum.photos/200/300/?random",
        price: "$6.00"
    }
]
const topDesserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price
    }
})
function ListItems() {
    console.log(topDesserts);
    const listItems = data.map((dessert, index) => {
        const itemText = `${dessert.title} - ${dessert.price}`
        return <li key={index}>{itemText}</li>
    })
    return (
        <ul>{listItems}</ul>
    );
}

export default ListItems;

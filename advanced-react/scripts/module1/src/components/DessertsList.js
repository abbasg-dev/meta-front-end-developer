function DessertsList(props) {
    const data = props.data.filter(item => item.calories < 500).sort(function (a, b) { return a.calories - b.calories }).map((item, index) => {
        return <li key={index}>{item.name} - {item.calories} cal</li>
    })
    // Implement the component here.
    return (
        <>
            <h2>List of low calorie desserts:</h2>
            <ul>
                {data}
            </ul>
        </>
    );
}

export default DessertsList;

/*
Given a list of products with information "TITLE, POPULARITY, PRICE"
separated by commas, return a sorted list of product names where
the names are sorted by popularity. If the products have the same popularity,
then list the product with the lower price first.
Popularity and prices are integers.


EXAMPLE INPUT: 

[
    "Belkin, 98, 24",
    "Cat cradle, 78, 24",
    "Mouse, 78, 12",
    "Cotton, 98, 78",
    "Yarn ball, 66, 10",
    "Game boy, 100, 185",
    "Book, 54, 5"
]

EXAMPLE OUTPUT:

"Game boy"
"Belkin"
"Cotton"
"Mouse"
"Cat cradle"
"Yarn ball"
"Book"

*/

const input = [
    "Belkin, 98, 24",
    "Cat cradle, 78, 24",
    "Mouse, 78, 12",
    "Cotton, 98, 78",
    "Yarn ball, 66, 10",
    "Game boy, 100, 185",
    "Book, 54, 5"
];

const sortProductsByPopularity = (input) => {
    const transformedProducts = input.map((element) => {
        let currentElement = element.split(',');
        currentElement[1] = parseInt(currentElement[1]);
        currentElement[2] = parseInt(currentElement[2]);
        return currentElement;
    });

    transformedProducts.sort((firstProduct, secondProduct) => {

        if(firstProduct[1] === secondProduct[1]) {
            if(firstProduct[2] < secondProduct[2]) {
                return -1;
            } else if (firstProduct[2] > secondProduct[2]) {
                return 1;
            } else {
                return 0;
            }
        }

        return secondProduct[1] - firstProduct[1];
    })
    
    let sortedProducts = [];

    transformedProducts.forEach((element) => {
        sortedProducts.push(element[0]);
    })

    console.log(sortedProducts.join('\n'));
    return sortedProducts;

}

sortProductsByPopularity(input);


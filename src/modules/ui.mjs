const renderCatalog = (products) => {
    console.clear();
    console.log("======================");
    console.log("CATALOG");
    console.log("======================");

    // HW1: align columns
    products.forEach((product, idx) => {
        console.log(
            `${idx + 1}. ${product.name.padEnd(15)} ${product.price.toFixed(2)}`
        );
    });
};

// HW2: make a helper function to format section headers
const formatSectionHeader = (header) => {
    const length = header.length;
    const separator = '='.repeat(length);
    return `${separator}\n${header}\n${separator}`;
};

export default { renderCatalog, formatSectionHeader };

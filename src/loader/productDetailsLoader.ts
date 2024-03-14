interface Product {
    slug: string;
    name: string;
}

async function productDetailsLoader(params: any): Promise<Product> {
    const productSlug = params?.params?.slug;

    // Mocked API response
    const mockApiResponse = {
        slug: productSlug,
        name: `delicious ${productSlug}`,
    };

    // Simulating API request delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Simulating error handling
    const shouldErrorOccur = false;
    if (shouldErrorOccur) {
        throw new Error("Failed to fetch product details");
    }

    return mockApiResponse;
}


export default productDetailsLoader


interface Product {
    slug: string;
    name: string;
}

interface UpdateRequest {
    formData(): Promise<FormData>;
}

interface UpdateParams {
    slug: string;
}

interface ActionProps {
    params: UpdateParams,
    request: UpdateRequest
}


const PRODUCTLIST: Product[] = [
    {
        slug: 'milk',
        name: 'nutritious milk'
    },
    {
        slug: 'salt',
        name: "savory salt"
    },
    {
        slug: 'sugar',
        name: 'delicate sugar'
    }
];

export async function productDetailsLoader(params: any): Promise<Product> {
    const productSlug = params?.params?.slug;

    const product = PRODUCTLIST.find((item) => item.slug === productSlug);

    // Mocked API response
    const mockApiResponse: Product = {
        slug: product?.slug as string,
        name: product?.name as string,
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

export async function updateProductName({ request, params }: ActionProps): Promise<Product> {
    const update = Object.fromEntries(await request.formData())['new-name']
    const slug = params.slug

    PRODUCTLIST.map((product) => {
        if (product.slug == slug) {
            product.name = update as string
            return { ...product }
        }
    })

    return PRODUCTLIST[1]
}

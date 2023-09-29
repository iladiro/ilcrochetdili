export type Product = {
    id: string;
    details: ProductDetails;
    carousel: string[]
}

export type ProductDetails = {
    title: string;
    description: string;
    material: string;
    imgsrc: string;
    size: string;
    href: string;
}
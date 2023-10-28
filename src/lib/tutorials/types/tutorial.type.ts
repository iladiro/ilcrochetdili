export type Tutorial = {
    id: string;
    details: TutorialDetails;
}

export type TutorialDetails = {
    title: string;
    pdf: string;
    material: string;
    imgsrc: string;
    size: string;
}
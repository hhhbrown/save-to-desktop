export const mockFolders = ["Party", "Camp", "Wedding", "Grad", "Show", "Trip"];

export type MockPhotoStatus = "pending" | "approved" | "rejected";

export type MockPhoto = {
    id: number;
    name: string;
    status: MockPhotoStatus;
};

export const mockPhotos: MockPhoto[] = [
    { id: 1, name: "IMG_001.jpg", status: "pending" },
    { id: 2, name: "IMG_002.jpg", status: "pending" },
    { id: 3, name: "IMG_003.jpg", status: "approved" },
];

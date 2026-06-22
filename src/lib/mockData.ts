export type MockFolder = {
    id: string;
    name: string;
    uploadToken: string;
    eventDate: string;
    photoCount: number;
};

export type MockPhotoStatus = "pending" | "approved" | "rejected";

export type MockPhoto = {
    id: number;
    folderId: string;
    name: string;
    status: MockPhotoStatus;
    uploadedBy: string;
};

export const mockFolders: MockFolder[] = [
    {
        id: "party",
        name: "Party",
        uploadToken: "party-drop",
        eventDate: "June 28, 2026",
        photoCount: 5,
    },
    {
        id: "camp",
        name: "Camp",
        uploadToken: "camp-summer",
        eventDate: "July 12, 2026",
        photoCount: 3,
    },
    {
        id: "wedding",
        name: "Wedding",
        uploadToken: "wedding-glow",
        eventDate: "August 9, 2026",
        photoCount: 8,
    },
    {
        id: "grad",
        name: "Grad",
        uploadToken: "grad-night",
        eventDate: "June 21, 2026",
        photoCount: 4,
    },
    {
        id: "show",
        name: "Show",
        uploadToken: "show-backstage",
        eventDate: "September 4, 2026",
        photoCount: 2,
    },
    {
        id: "trip",
        name: "Trip",
        uploadToken: "trip-camera",
        eventDate: "October 16, 2026",
        photoCount: 6,
    },
];

export const mockPhotos: MockPhoto[] = [
    {
        id: 1,
        folderId: "party",
        name: "IMG_001.jpg",
        status: "pending",
        uploadedBy: "Maya",
    },
    {
        id: 2,
        folderId: "party",
        name: "IMG_002.jpg",
        status: "pending",
        uploadedBy: "Theo",
    },
    {
        id: 3,
        folderId: "party",
        name: "IMG_003.jpg",
        status: "approved",
        uploadedBy: "Jules",
    },
    {
        id: 4,
        folderId: "camp",
        name: "CABIN_014.jpg",
        status: "pending",
        uploadedBy: "Ari",
    },
    {
        id: 5,
        folderId: "camp",
        name: "LAKE_022.jpg",
        status: "approved",
        uploadedBy: "Sam",
    },
    {
        id: 6,
        folderId: "wedding",
        name: "DANCE_101.jpg",
        status: "pending",
        uploadedBy: "Nora",
    },
    {
        id: 7,
        folderId: "wedding",
        name: "TOAST_044.jpg",
        status: "approved",
        uploadedBy: "Eli",
    },
    {
        id: 8,
        folderId: "grad",
        name: "CAPS_202.jpg",
        status: "approved",
        uploadedBy: "Kai",
    },
];

export function getFolderById(folderId: string) {
    return mockFolders.find((folder) => folder.id === folderId);
}

export function getFolderByToken(token: string) {
    return mockFolders.find((folder) => folder.uploadToken === token);
}

export function getPhotosByFolderId(folderId: string) {
    return mockPhotos.filter((photo) => photo.folderId === folderId);
}

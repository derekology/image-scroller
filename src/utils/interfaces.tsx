export interface Image {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

export interface ImageScrollerProps {
    imagesArray: Image[];
}

export interface ShuffleButtonProps {
    handleShuffleClick: () => void;
}

export interface ArraySwitcherProps {
    switcherText: string;
    handleArraySwitcherClick: () => void;
}
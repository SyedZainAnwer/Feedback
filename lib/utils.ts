export const calculateTime = (createdAt: Date): string => {
    const now = new Date();
    const differenceInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

    if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(differenceInSeconds / 3600);
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
}
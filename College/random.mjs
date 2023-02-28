export const randomNum = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low);
}

export const description = () => console.log("module intro");
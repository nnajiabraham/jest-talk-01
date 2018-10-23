export const add = (a, b) => a + b;

export const minus = (a, b) => a - b;

export const times = (a, b) => {
    const result = a * b;
    return result === -0 ? 0 : result;
};

export const divide = (a, b) => {
    const result = a / b;
    return result === -0 ? 0 : result;
};

export const percent = (num) => parseFloat(num) / 100;

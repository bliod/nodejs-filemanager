export const update = (name) => {
    return {
        type: "UPDATE",
        target: name
    }
}
export const add = (file) => {
    return {
        type: "ADD",
        payload: { name: file, active: true }
    }
}
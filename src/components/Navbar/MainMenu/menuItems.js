import { nanoid } from "nanoid"

const menuItems = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        private: false
    },
    {
        id: nanoid(),
        to: "/cards",
        text: "Cards",
        private: true
    },
    {
        id: nanoid(),
        to: "/favorite",
        text: "Favorite",
        private: true
    }
]

export default menuItems;
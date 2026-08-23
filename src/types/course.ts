interface Category {
    name: string
}

export interface Course {
    id: number
    name: string
    image: string
    chaptersCount: number
    category: Category
    user: {
        avatar: string
    };
}
interface User {
    id: number
    name: string
}

const user1: User[] = [
    { id: 1, name: 'Marko' },
    { id: 2, name: 'Nicola' }
]

const user2: User[] = [
    { id: 3, name: 'Lucy' },
    { id: 4, name: 'Mica' }
]

let user3: User[] = [...user1, ...user2]


console.log('User1:', user1, '\n')
console.log('User2:', user2, '\n')
console.log('User3:', user3, '\n')

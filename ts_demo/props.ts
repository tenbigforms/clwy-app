interface Props {
    title: string

}

let netWorkError = (props: Props) => {
    console.log(props.title)
}



let props: Props = { title: "xxx" }
netWorkError(props)




interface Param {
    a: number
    b: number
}

function add(param: Param): number {
    return param.a + param.b
}

let param: Param = { a: 23, b: 43 }

let c = add(param)

console.log(c)




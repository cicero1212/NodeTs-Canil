type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObj = (activeMenu: MenuOptions)=> {
    let returnObj = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        returnObj[activeMenu] = true
    }

    return returnObj
}
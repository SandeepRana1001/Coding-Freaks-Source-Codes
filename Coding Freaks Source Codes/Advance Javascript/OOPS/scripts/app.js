class YouTube{

    user(userType)
    {
        console.log(`I Am ${userType}`)
    }

    static content()
    {
        console.log("Content")
    }
}

class YouTube2 extends YouTube {
}

YouTube2.content()
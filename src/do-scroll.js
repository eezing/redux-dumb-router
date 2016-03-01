
export default function(targetY, callback) {

    setTimeout(() => {

        do {

            window.scroll(0, targetY)

            if (window.scrollY === targetY) {
                callback()
            }
        }

        while(window.scrollY !== targetY)
    })
}

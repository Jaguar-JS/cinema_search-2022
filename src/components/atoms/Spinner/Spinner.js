import getRefs from "@/utils/getRefs"

const run = () => {
    getRefs().moviesContainer.innerHTML = ''
    getRefs().spinner.classList.remove('visually-hidden')
}

const stop = () => {
    getRefs().spinner.classList.add('visually-hidden')
}

export default {run, stop}
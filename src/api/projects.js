const endpoint = process.env.REACT_APP_ENDPOINT || ""

const delay = async () => {
    await setTimeout(()=>{}, 1000)
}

export const fetchProjects = async () => {
    const fakeData = []

    await delay()

    return fakeData
}

export const fetchProject = async (id) => {
    const fakeData = []

    await delay()

    return fakeData[id]
}
const deslug = recipeTitle => {
    const newTitle = recipeTitle.replace(/-/g, " ")
    console.log("deslug:" +newTitle)
    return newTitle
}

export default deslug
const newContributors = document.querySelectorAll("#contributor-name")

function contributorsHere() {
    newContributors.forEach(contributor => {
        const contributorName = contributor.textContent
        const contributorId = contributorName.toLowerCase().replace(/\s+/g, '-')
        
        document.getElementById("contributors-list").innerHTML += `
            <a href="#${contributorId}">${contributorName}</a>
        `
        contributor.id = contributorId
    })
}

contributorsHere()

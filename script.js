async function fetchData(){
    try{
        
        const username = document.getElementById("search-input").value.trim();
        if(!username){
            console.log("Please eneter a username");
            return;
        }
        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok){
            throw new Error(`User not found (${response.status})`);
        }

        const data = await response.json();
        const profileImg = document.getElementById("avatar");

        const user_Name = document.getElementById("username");
        user_Name.textContent = data.login;

        const bio = document.getElementById("bio");
        bio.textContent = data.bio;

        const repoCount = document.getElementById("repos-count");
        repoCount.textContent = data.public_repos;

        const followerCount = document.getElementById("followers-count");
        followerCount.textContent = data.followers;

        const followingCount = document.getElementById("following-count");
        followingCount.textContent = data.following;

        profileImg.src = data.avatar_url;

        // fetch repos
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();

        const reposList = document.getElementById("repos-list");
        reposList.innerHTML = repos.map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </li>
        `).join('');

        document.getElementById("error").classList.add("hidden"); // hide old error
        document.getElementById("profile").classList.remove("hidden");
        document.getElementById("repos").classList.remove("hidden");

        console.log(data.avatar_url);
        console.log(data);

        
        
    }
    catch(error){
        document.getElementById("profile").classList.add("hidden");
        document.getElementById("repos").classList.add("hidden");
        document.getElementById("error").classList.remove("hidden");
        console.error("Fetch failed:", error);
    }
}

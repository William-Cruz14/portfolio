import {Octokit} from "octokit";

export const getGitHub = async () => {
    const apiKey = import.meta.env.VITE_KEY_GIT_HUB;
    const octokit = new Octokit(
        {
            auth: apiKey
        }
    );

    try {
        const result = await octokit.request('GET /users/{username}/repos' ,
            {
                username: 'William-Cruz14',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                },
                sort: 'updated',
                direction: 'desc',
            });

        return result.data;


    } catch (error) {
        console.error("Error get a repositories")
        throw error;
    }
}

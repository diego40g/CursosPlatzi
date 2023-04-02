require('dotenv').config();

const API = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCoGDh1Xa3kUCpok24JN5DKA'

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.data.map(video => `
            <div class="group relative">
                <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.thumbnail[3].url}" alt="${video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;

        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
}) () ;